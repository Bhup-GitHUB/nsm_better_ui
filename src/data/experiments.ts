export type Experiment = {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: string[];
  code: string;
  output?: string; //re
};

const experiments = [
  {
    id: "1",
    title: "Experiment 1 - Bisection Method",
    description:
      "Experiment 1: Numerical root finding using the Bisection Method for solving x^3 + 4x^2 - 10 = 0.",
    image: "https://placehold.co/600x400/111/333?text=Bisection+Method",
    skills: ["Numerical Methods", "Root Finding", "Bisection Method"],
    code: `% MATLAB Code for Part 1(ii): Bisection Method for x^3 + 4x^2 - 10 = 0
clc; clear;
% Function
f = @(x) x.^3 + 4*x.^2 - 10;
% Parameters
a = 1;              % Left endpoint of interval
b = 2;              % Right endpoint of interval
epsilon = 1e-3;     % Tolerance (10^-3)
max_iter = 100;     % Maximum iterations (safety limit)
% Check if the interval is valid for bisection
if f(a)*f(b) >= 0
    error('Bisection requires f(a) and f(b) with opposite signs.');
end
% Bisection Method
iter = 0;
while iter < max_iter
    c = (a + b)/2;  % Midpoint
    iter = iter + 1;

    % Check if midpoint is the root
    if f(c) == 0
        break;
    end

    % Update interval
    if f(a)*f(c) < 0
        b = c;  % Root is in [a, c]
    else
        a = c;  % Root is in [c, b]
    end

    % Check for convergence
    if (b - a) < 2*epsilon
        break;
    end
end
% Output results
root = (a + b)/2;  % Final approximation
fprintf('Approximate root: %.6f\\n', root);
fprintf('Number of iterations: %d\\n', iter);`,
  },
  {
    id: "2",
    title: "Experiment 7 - Lagrange Interpolation",
    description:
      "Experiment 7: Lagrange interpolation method for estimating oxygen saturation at given temperatures.",
    image: "https://placehold.co/600x400/111/333?text=Lagrange+Interpolation",
    skills: ["Numerical Methods", "Interpolation", "Lagrange Method"],
    code: `clc; clear; close all;
t = [0 8 16 24 32 40];
O_t = [14.621 11.843 9.870 8.418 7.305 6.413];
p_values = [15, 27];
n = length(t);
O_interp = zeros(size(p_values));
for k = 1:length(p_values)
    p = p_values(k);
    sum = 0;

    for i = 1:n
        l = 1;
        for j = 1:n
            if j ~= i
                l = l * (p - t(j)) / (t(i) - t(j));
            end
        end
        sum = sum + l * O_t(i);
    end

    O_interp(k) = sum;
end
disp('Interpolated values:');
disp(['O(15) = ', num2str(O_interp(1))]);
disp(['O(27) = ', num2str(O_interp(2))]);`,
  },
  {
    id: "3",
    title: "Experiment 8 - Newton's Divided Difference Interpolation",
    description:
      "Experiment 8: Newton's divided difference interpolation method for approximating e^x values.",
    image:
      "https://placehold.co/600x400/111/333?text=Newton+Divided+Difference",
    skills: ["Numerical Methods", "Interpolation", "Newton's Method"],
    code: `clc; clear; close all;
% Given data points
x = [1 1.5 2.0 2.5];
f = [2.7183 4.4817 7.3891 12.1825];
n = length(x);
F = zeros(n,n);
F(:,1) = f'; % First column is function values
% Compute divided differences
for j = 2:n
    for i = j:n
        F(i,j) = (F(i,j-1) - F(i-1,j-1)) / (x(i) - x(i-j+1));
    end
end
% Interpolation at p = 2.25
p = 2.25;
Pn = F(1,1);
product = 1;
for i = 2:n
    product = product * (p - x(i-1));
    Pn = Pn + F(i,i) * product;
end
% Display result
fprintf('Estimated f(2.25) = %.4f\\n', Pn);
fprintf('Exact e^2.25 = %.4f\\n', exp(2.25));
fprintf('Error = %.4f\\n', abs(exp(2.25) - Pn));`,
  },
  {
    id: "4",
    title: "Experiment 9 - RMS Current using Trapezoidal and Simpson's Rule",
    description:
      "Experiment 9: Numerical integration methods (Trapezoidal and Simpson's rules) to calculate RMS current value.",
    image: "https://placehold.co/600x400/111/333?text=Numerical+Integration",
    skills: [
      "Numerical Methods",
      "Integration",
      "Trapezoidal Rule",
      "Simpson's Rule",
    ],
    code: `clc; clear; close all;
T = 1;
N_values = [4, 6, 10, 20];
i_t = @(t) 5 * exp(-1.25 * t) .* sin(2 * pi * t);
f_rms = @(t) (i_t(t)).^2;
a = 0; b = 0.5;
for N = N_values
    I_rms_trap = composite_trapezoidal(f_rms, a, b, N);
    I_rms_trap = sqrt((1/T) * I_rms_trap);
    fprintf('For N = %d, RMS Current (Trapezoidal) = %.6f\\n', N, I_rms_trap);
    if mod(N,2) == 0
        I_rms_simp = composite_simpson(f_rms, a, b, N);
        I_rms_simp = sqrt((1/T) * I_rms_simp);
        fprintf('For N = %d, RMS Current (Simpson) = %.6f\\n', N, I_rms_simp);
    end
    fprintf('\\n');
end
function I = composite_trapezoidal(f, a, b, N)
    h = (b - a) / N;
    x = a + h * (1:N-1);
    sum_val = sum(2 * f(x));
    sum_val = sum_val + f(a) + f(b);
    I = (h / 2) * sum_val;
end
function I = composite_simpson(f, a, b, N)
    h = (b - a) / N;
    x = a + h * (1:N-1);
    sum_val = sum(4 * f(x(1:2:end))) + sum(2 * f(x(2:2:end-1)));
    sum_val = sum_val + f(a) + f(b);
    I = (h / 3) * sum_val;
end`,
  },
  {
    id: "10",
    title: "Experiment 10 (Q2) - Least Squares Fitting",
    description:
      "Experiment 10 (Q2): Implementing least squares method for linear and quadratic curve fitting.",
    image: "https://placehold.co/600x400/111/333?text=Least+Squares+Fit",
    skills: ["Numerical Methods", "Curve Fitting", "Least Squares"],
    code: `% Given Data
x = [-2 -1 0 1 2]';
y = [15 1 1 3 19]';
%% Linear Fit: y = a + bx
X_linear = [ones(size(x)) x];
coeffs_linear = X_linear \\ y;
a1 = coeffs_linear(1);
b1 = coeffs_linear(2);
fprintf('Linear Fit: y = %.3f + %.3fx\\n', a1, b1);
%% Quadratic Fit: y = a + bx + cx^2
X_quad = [ones(size(x)) x x.^2];
coeffs_quad = X_quad \\ y;
a2 = coeffs_quad(1);
b2 = coeffs_quad(2);
c2 = coeffs_quad(3);
fprintf('Quadratic Fit: y = %.3f + %.3fx + %.3fx^2\\n', a2, b2, c2);
%% Optional: Plot for visualization
x_fit = linspace(min(x), max(x), 100);
y_linear_fit = a1 + b1 * x_fit;
y_quad_fit = a2 + b2 * x_fit + c2 * x_fit.^2;
figure;
plot(x, y, 'ro', 'MarkerSize', 8, 'DisplayName', 'Data');
hold on;
plot(x_fit, y_linear_fit, 'b-', 'DisplayName', 'Linear Fit');
plot(x_fit, y_quad_fit, 'g--', 'DisplayName', 'Quadratic Fit');
legend;
xlabel('x');
ylabel('f(x)');
title('Least Squares Fit: Linear and Quadratic');
grid on;`,
  },
  {
    id: "11",
    title: "Experiment 11 (Q2) - Correlation and Regression",
    description:
      "Experiment 11 (Q2): Karl Pearson correlation coefficient and regression lines (y on x, x on y).",
    image: "https://placehold.co/600x400/222/444?text=Correlation+Regression",
    skills: ["Statistics", "Correlation", "Regression Analysis"],
    code: `x = [-10 -5 0 5 10];
  y = [5 9 7 11 13];
  n = length(x);
  
  x_bar = mean(x);
  y_bar = mean(y);
  
  numerator = sum((x - x_bar) .* (y - y_bar));
  denominator = sqrt(sum((x - x_bar).^2) * sum((y - y_bar).^2));
  r = numerator / denominator;
  
  fprintf('Karl Pearson Correlation Coefficient (r): %.4f\\n', r);
  
  sigma_x = sqrt(sum((x - x_bar).^2) / n);
  sigma_y = sqrt(sum((y - y_bar).^2) / n);
  
  b_yx = r * (sigma_y / sigma_x);
  fprintf('Regression line (y on x): y = %.4fx + %.4f\\n', b_yx, y_bar - b_yx * x_bar);
  
  b_xy = r * (sigma_x / sigma_y);
  fprintf('Regression line (x on y): x = %.4fy + %.4f\\n', b_xy, x_bar - b_xy * y_bar);
  
  figure;
  scatter(x, y, 'filled'); hold on;
  title('Regression Lines and Data Points');
  xlabel('x'); ylabel('y');
  grid on;
  
  x_vals = linspace(min(x), max(x), 100);
  y_vals_y_on_x = b_yx * (x_vals - x_bar) + y_bar;
  plot(x_vals, y_vals_y_on_x, 'r', 'LineWidth', 2, 'DisplayName', 'y on x');
  
  y_vals = linspace(min(y), max(y), 100);
  x_vals_x_on_y = b_xy * (y_vals - y_bar) + x_bar;
  plot(x_vals_x_on_y, y_vals, 'b--', 'LineWidth', 2, 'DisplayName', 'x on y');
  
  legend;`,
  },
];
export const getExperiments = () => {
  return experiments;
};

export const getExperimentById = (id: string | undefined) => {
  if (!id) return null;
  return experiments.find((exp) => exp.id === id) || null;
};
