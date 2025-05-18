import React, { useState, useEffect, useRef } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { getExperiments } from "@/data/experiments";
import { useToast } from "@/hooks/use-toast";

const CommandBar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const experiments = getExperiments();

  // Filter experiments by search
  const filtered = experiments.filter(
    (exp) =>
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.description.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K to open
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      // 'c' to copy selected code (when open)
      if (open && e.key.toLowerCase() === "c" && filtered[selectedIndex]) {
        e.preventDefault();
        navigator.clipboard.writeText(filtered[selectedIndex].code);
        toast({ title: "Copied!", description: filtered[selectedIndex].title });
      }
      // Arrow navigation
      if (open && ["ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        setSelectedIndex((prev) => {
          if (e.key === "ArrowDown") return Math.min(prev + 1, filtered.length - 1);
          if (e.key === "ArrowUp") return Math.max(prev - 1, 0);
          return prev;
        });
      }
      // Enter to copy
      if (open && e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        navigator.clipboard.writeText(filtered[selectedIndex].code);
        toast({ title: "Copied!", description: filtered[selectedIndex].title });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, selectedIndex, toast]);

  // Reset selection on open/search
  useEffect(() => {
    if (open) setSelectedIndex(0);
  }, [open, search]);

  // Autofocus input when open
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        ref={inputRef}
        value={search}
        onValueChange={setSearch}
        placeholder="Search experiments..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Experiments">
          {filtered.map((exp, i) => (
            <CommandItem
              key={exp.id}
              onSelect={() => {
                navigator.clipboard.writeText(exp.code);
                toast({ title: "Copied!", description: exp.title });
                setOpen(false);
              }}
              data-selected={i === selectedIndex}
              className={i === selectedIndex ? "bg-accent text-accent-foreground" : ""}
            >
              <div>
                <div className="font-semibold">{exp.title}</div>
                <div className="text-xs text-muted-foreground">{exp.description}</div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandBar; 