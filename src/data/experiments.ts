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
    title: "Experiment 6: Power Method  (eigenvalues)",
    description: "eigen value using power method experiment 6 q1 and q2 ",
    image: "https://placehold.co/600x400/111/333?text=eignevalues",
    skills: ["eigen value", "Power Method"],
    code: `A = [4 1 0; 1 20 1; 0 1 4];  
x = [1; 1; 1];   
epsilon = 1e-3;
K_prev = 0;

while true
    y = A * x;
    K = max(abs(y));
    x_new = y / K;

    if abs(K - K_prev) < epsilon
        break;
    end

    x = x_new;
    K_prev = K;
end

fprintf('Largest Eigenvalue: %.4f', K);
fprintf('  Corresponding Eigenvector: ');
disp(x_new);
`,
  },
  {
    id: "2",
    title: "Experiment 6: Power Method  (eigenvalues) (spring mass)",
    description:
      "eigen value using power method experiment  q2 random x y z values for x0 ",
    image: "https://placehold.co/600x400/111/333?text=eignevalues",
    skills: ["eigen value", "Power Method"],
    code: `A = [-4 2 0; 2 -6 4; 0 8 -16];
x = [1; 1; 0];
epsilon = 1e-3;
K_prev = 0;

while true
    y = A * x;
    K = max(abs(y));
    x_new = y / K;

    if abs(K - K_prev) < epsilon
        break;
    end

    x = x_new;
    K_prev = K;
end

fprintf('Largest Eigenvalue: %.4f\\n', K);
fprintf('Corresponding Eigenvector:\\n');
disp(x_new);
`,
  },
  {
    id: "3",
    title: "Experiment 6 - Lagrange Interpolation o(x) and o(y)",
    description: "lagrange value at o(x) and o(y)",
    image: "https://placehold.co/600x400/111/333?text=Lagrange+Interpolation",
    skills: ["Numerical Methods", "Interpolation", "Lagrange Method"],
    code: `x = [0 8 16 24 32 40];
y = [14.621 11.843 9.870 8.418 7.305 6.413];
p1 = 15;
n = length(x);
sum1 = 0;
for i = 1:n
    L = 1;
    for j = 1:n
        if j ~= i
            L = L * (p1 - x(j)) / (x(i) - x(j));
        end
    end
    sum1 = sum1 + L * y(i);
end
p2 = 27;
sum2 = 0;
for i = 1:n
    L = 1;
    for j = 1:n
        if j ~= i
            L = L * (p2 - x(j)) / (x(i) - x(j));
        end
    end
    sum2 = sum2 + L * y(i);
end
fprintf('O(15) ≈ %.4f\\n', sum1);
fprintf('O(27) ≈ %.4f\\n', sum2);
`,
  },
  {
    id: "16",
    title: "Experiment 6 - Lagrange Interpolation (determine current at t)",
    description: "lagrange value at o(x) and o(y)",
    image: "https://placehold.co/600x400/111/333?text=Lagrange+Interpolation",
    skills: ["Numerical Methods", "Interpolation", "Lagrange Method"],
    code: `t = [0 0.125 0.25 0.375 0.5];
i = [0 6.24 7.75 4.85 0.00];

p = 0.23;
n = length(t);
sum = 0;

for k = 1:n
    L = 1;
    for j = 1:n
        if j ~= k
            L = L * (p - t(j)) / (t(k) - t(j));
        end
    end
    sum = sum + L * i(k);
end

fprintf('Current at t = 0.23 is approximately: %.4f A\\n', sum);`,
  },
  {
    id: "18",
    title: "Experiment 6 - Lagrange Interpolation (voltage drop )",
    description: "lagrange value at o(x) and o(y)",
    image: "https://placehold.co/600x400/111/333?text=Lagrange+Interpolation",
    skills: ["Numerical Methods"],
    code: `i_vals = [0.25 0.75 1.25 1.5 2.0];
V_vals = [-0.45 -0.6 0.7 1.88 6.0];
target = 1.15;

fprintf('Estimating V at i = 1.15:\\n');

for order = 1:4
    x = i_vals(1:order+1);
    y = V_vals(1:order+1);
    n = length(x);
    sum = 0;

    for k = 1:n
        L = 1;
        for j = 1:n
            if j ~= k
                L = L * (target - x(j)) / (x(k) - x(j));
            end
        end
        sum = sum + L * y(k);
    end

    fprintf('  Order %d polynomial: V(1.15) ≈ %.4f\\n', order, sum);
end`,
  },
  {
    id: "20",
    title: "Experiment 7 - Interpolation newtons dividend",
    description: "f(x) value findout ",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `x = [1 1.5 2 2.5]; 
f = [2.7183 4.4817 7.3891 12.1825]; 
p = 2.25; 
n = length(x);

F = zeros(n); 
F(:,1) = f';

for i = 2:n
    for j = i:n
        F(j,i) = (F(j,i-1) - F(j-1,i-1)) / (x(j) - x(j-i+1));
    end
end

sum = F(1,1);
for i = 2:n
    prod = 1;
    for j = 1:i-1
        prod = prod * (p - x(j));
    end
    sum = sum + F(i,i) * prod;
end

fprintf('Interpolated value at x = %.2f is %.5f\\n', p, sum);
fprintf('Exact value e^x = %.5f\\n', exp(p));
fprintf('Absolute Error = %.5f\\n', abs(exp(p) - sum));
`,
  },
  {
    id: "22",
    title: "Experiment 7 - Interpolation newtons dividend(temperature)",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `x = [200 250 300 375 425 475 600];
f = [7.5 8.6 8.7 10 11.3 12.7 15.3];
p = 400; %temperature
n = length(x);
F = zeros(n, n);
F(:,1) = f';
for i = 2:n
    for j = i:n
        F(j,i) = (F(j,i-1) - F(j-1,i-1)) / (x(j) - x(j-i+1));
    end
end
sum = F(1,1);
for i = 2:n
    prod = 1;
    for j = 1:i-1
        prod = prod * (p - x(j));
    end
    sum = sum + F(i,i) * prod;
end
fprintf('Predicted percent elongation at 400°C = %.4f\\n', sum);

`,
  },
  {
    id: "27",
    title: "Experiment 8 - RMS VALUE USING TRAPEZOIDAL AND SIMPSONS RULE",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `clc; clear; close all;
T = 1;
N_values = [4, 6, 10, 20];
i_t = @(t) 5 * exp(-1.25 * t) .* sin(2 * pi * t);
f_rms = @(t) (i_t(t)).^2;
a = 0; b = 0.5;

results = [];
for N = N_values
    I_rms_trap = sqrt((1/T) * composite_trapezoidal(f_rms, a, b, N));
    results = [results; {N, 'Trapezoidal', I_rms_trap}];
    
    if mod(N, 2) == 0
        I_rms_simp = sqrt((1/T) * composite_simpson(f_rms, a, b, N));
        results = [results; {N, 'Simpson', I_rms_simp}];
    end
end

% Display results as a table
disp(cell2table(results, 'VariableNames', {'N', 'Method', 'RMS_Current'}));

% Integration methods
function I = composite_trapezoidal(f, a, b, N)
    x = a + (b - a) * (1:N-1) / N;
    I = (b - a) / (2 * N) * (f(a) + f(b) + 2 * sum(f(x)));
end

function I = composite_simpson(f, a, b, N)
    x = a + (b - a) * (1:N-1) / N;
    I = (b - a) / (3 * N) * (f(a) + f(b) + 4 * sum(f(x(1:2:end))) + 2 * sum(f(x(2:2:end-1))));
end

`,
  },
  {
    id: "32",
    title: "Experiment 8 - composite_trapezoidal and simpsons rule",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `f = @(x) cos(x).^2;
a = -0.25;
b = 0.25;
subintervals = [4, 6, 10, 20];
fprintf('Integral of (cos x)^2 from %g to %g:\\n\\n', a, b);
fprintf('%5s %15s %15s\\n', 'n', 'Trap', 'Simp');
fprintf('%s\\n', repmat('-', 1, 40));
for N = subintervals
    trap_result = trapezoidal_rule(f, a, b, N);
    simp_result = simpson_rule(f, a, b, N);
    fprintf('%5d %15.10f %15.10f\\n', N, trap_result, simp_result);
end
exact_integral = @(x) x/2 + sin(2*x)/4;
exact = exact_integral(b) - exact_integral(a);
fprintf('\\nExact value: %.10f\\n', exact);
function ans = trapezoidal_rule(f, a, b, N)
    h = (b - a) / N;
    sum_val = f(a) + f(b);
    for i = 1:N-1
        x = a + h * i;
        sum_val = sum_val + 2 * f(x);
    end
    ans = sum_val * (h / 2);
end
function ans = simpson_rule(f, a, b, N)
    if mod(N, 2) ~= 0
        N = N + 1;
        fprintf('N must be even. Using N = %d instead.\\n', N);
    end
    h = (b - a) / N;
    sum_val = f(a) + f(b);
    for i = 1:N-1
        x = a + h * i;
        if mod(i, 2) == 0
            sum_val = sum_val + 2 * f(x);
        else
            sum_val = sum_val + 4 * f(x);
        end
    end
    ans = sum_val * (h / 3);
end

`,
  },
  {
    id: "92",
    title:
      "Experiment 9 - modified Eulers method and Runga-Kutta fourth-order method with step length 0.2 interval 0 to 1",
    description: " equation y = -y + 2cos(t)",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `clc; clear;
f = @(t, y) -y + 2*cos(t);
a = 0; b = 1; h = 0.2;
n = (b - a)/h;
t = a:h:b;
y1 = zeros(1, n+1);
y2 = zeros(1, n+1);
y1(1) = 1;
y2(1) = 1;
for i = 1:n
    k1 = f(t(i), y1(i));
    y_pred = y1(i) + h * k1;
    k2 = f(t(i+1), y_pred);
    y1(i+1) = y1(i) + (h/2)*(k1 + k2);
end
for i = 1:n
    k1 = h * f(t(i), y2(i));
    k2 = h * f(t(i) + h/2, y2(i) + k1/2);
    k3 = h * f(t(i) + h/2, y2(i) + k2/2);
    k4 = h * f(t(i) + h, y2(i) + k3);
    y2(i+1) = y2(i) + (1/6)*(k1 + 2*k2 + 2*k3 + k4);
end
fprintf('  t        Modified Euler     Runge-Kutta 4\\n');
disp([t' y1' y2'])
plot(t, y1, 'ro--', t, y2, 'bs-');
legend('Modified Euler','RK4');
xlabel('t'); ylabel('y');
title('Solution of dy/dt = -y + 2cos(t)');
grid on;
`,
  },
  {
    id: "33",
    title:
      "Experiment 9 - modified Eulers method and Runga-Kutta fourth-order method with step length 0.2 interval 0 to 1",
    description: " equation y = sqrt(2 + y)",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `clc; clear;

% Given parameters
f = @(t, y) sqrt(2 + y);   % Function
a = 0; b = 1; h = 0.2;
n = (b - a)/h;
t = a:h:b;
y1 = zeros(1, n+1);
y2 = zeros(1, n+1);
y1(1) = 0.8;  % Initial condition for Modified Euler
y2(1) = 0.8;  % Initial condition for RK4

% Modified Euler's Method
for i = 1:n
    k1 = f(t(i), y1(i));
    y_pred = y1(i) + h * k1;
    k2 = f(t(i+1), y_pred);
    y1(i+1) = y1(i) + (h/2)*(k1 + k2);
end

% Runge-Kutta 4th Order Method
for i = 1:n
    k1 = h * f(t(i), y2(i));
    k2 = h * f(t(i) + h/2, y2(i) + k1/2);
    k3 = h * f(t(i) + h/2, y2(i) + k2/2);
    k4 = h * f(t(i) + h, y2(i) + k3);
    y2(i+1) = y2(i) + (1/6)*(k1 + 2*k2 + 2*k3 + k4);
end

% Output
fprintf('  t        Modified Euler     Runge-Kutta 4\\n');
disp([t' y1' y2'])

% Plot
plot(t, y1, 'ro--', t, y2, 'bs-');
legend('Modified Euler','RK4');
xlabel('t'); ylabel('y');
title('Solution of dy/dt = sqrt(2 + y)');
grid on;

`,
  },
  {
    id: "35",
    title:
      "Experiment 9 - modified Eulers method and Runga-Kutta fourth-order (RL CIRCUIT)1",
    description: "krichoff rl circuit",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `clc;
clear;
% Parameters
L = 1;
R = 1.5;
h = 0.05;
t0 = 0;
t_end = 1;
i0 = 0.5;
% Differential equation: di/dt = -R/L * i
f = @(t, i) -(R/L) * i;
% Time vector
t = t0:h:t_end;
n = length(t);
% Initialize solution arrays
i_exact = zeros(1, n);
i_mod_euler = zeros(1, n);
i_rk4 = zeros(1, n);
% Initial values
i_mod_euler(1) = i0;
i_rk4(1) = i0;
i_exact(1) = i0;
% Analytical solution
i_exact = i0 * exp(-(R/L) * t);
% Modified Euler Method
for j = 1:n-1
    k1 = f(t(j), i_mod_euler(j));
    predictor = i_mod_euler(j) + h * k1;
    k2 = f(t(j+1), predictor);
    i_mod_euler(j+1) = i_mod_euler(j) + (h/2) * (k1 + k2);
end
% Runge-Kutta 4th Order Method
for j = 1:n-1
    K1 = h * f(t(j), i_rk4(j));
    K2 = h * f(t(j) + h/2, i_rk4(j) + K1/2);
    K3 = h * f(t(j) + h/2, i_rk4(j) + K2/2);
    K4 = h * f(t(j) + h, i_rk4(j) + K3);
    i_rk4(j+1) = i_rk4(j) + (1/6) * (K1 + 2*K2 + 2*K3 + K4);
end
% Display results in table
T = table(t', i_exact', i_mod_euler', i_rk4', ...
    'VariableNames', {'Time', 'Exact', 'Modified_Euler', 'Runge_Kutta_4'});
disp(T);
% Plotting
figure;
plot(t, i_exact, 'k-', 'LineWidth', 2); hold on;
plot(t, i_mod_euler, 'bo--', 'LineWidth', 1.2);
plot(t, i_rk4, 'rs--', 'LineWidth', 1.2);
legend('Exact', 'Modified Euler', 'Runge-Kutta 4');
xlabel('Time (t)');
ylabel('Current i(t)');
title('RL Circuit: i''(t) = -1.5*i(t)');
grid on;
`,
  },
  {
    id: "315",
    title:
      "Experiment 11 Corelation coefficient and regression line(correlation coefficient)",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `% Data
x = [-10, -5, 0, 5, 10];
y = [5, 9, 7, 11, 13];

% Calculate correlation coefficient
corr_matrix = corrcoef(x, y);
r = corr_matrix(1, 2);

% Display result
disp(['Correlation Coefficient: ', num2str(r)]);

% without inbuilt function

% Given data
%x = [-10, -5, 0, 5, 10];
%y = [5, 9, 7, 11, 13];
%n = length(x);
%sum_x = sum(x);
%sum_y = sum(y);
%sum_xy = sum(x .* y);
%sum_x2 = sum(x.^2);
%sum_y2 = sum(y.^2);
%numerator = n * sum_xy - sum_x * sum_y;
%denominator = sqrt((n * sum_x2 - sum_x^2) * (n * sum_y2 - sum_y^2));
%r = numerator / denominator;
%disp(['Correlation Coefficient (Manual Calculation): ', num2str(r)]);
`,
  },
  {
    id: "316",
    title:
      "Experiment 11 Corelation coefficient and regression line(two regression lines)",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `% Data
x = 1:10;
y = [10, 12, 16, 28, 25, 36, 41, 49, 40, 50];
coeff_y_on_x = polyfit(x, y, 1);
b = coeff_y_on_x(1); % Slope
a = coeff_y_on_x(2); % Intercept
disp(['Regression line y on x: y = ', num2str(b), 'x + ', num2str(a)]);
coeff_x_on_y = polyfit(y, x, 1);
d = coeff_x_on_y(1); % Slope
c = coeff_x_on_y(2); % Intercept
disp(['Regression line x on y: x = ', num2str(d), 'y + ', num2str(c)]);`,
  },
  {
    id: "319",
    title:
      "Experiment 11 Corelation coefficient and regression line(predict years)",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `% Data
t = [0, 5, 10, 15, 20];
p = [100, 200, 450, 950, 2000];
log_p = log(p);

coeff = polyfit(t, log_p, 1);
k = coeff(1); % Slope (growth rate)
ln_p0 = coeff(2); % Intercept (ln(initial population))
% Predict population at t = 25 (20 + 5 years)
t_pred = 25;
p_pred = exp(ln_p0 + k * t_pred);
% Display result
disp(['Predicted population after 25 years: ', num2str(p_pred)]);`,
  },
  {
    id: "488",
    title: "Experiment 10 - least square apporximation (linear and quadratic) ",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `x = [-2, -1, 0, 1, 2];
y = [15, 1, 1, 3, 19];
% Linear and Quadratic Design Matrices
X1 = [ones(numel(x),1), x'];
X2 = [X1, x'.^2];
% Solve for coefficients
c1 = (X1'*X1)\(X1'*y');
c2 = (X2'*X2)\(X2'*y');
% Display results
fprintf('Linear: f(x) = %.4f + %.4f*x\n', c1);
fprintf('Quadratic: f(x) = %.4f + %.4f*x + %.4f*x^2\n', c2);
% Plot
xf = linspace(min(x)-0.5, max(x)+0.5, 100);
plot(x, y, 'ko', 'MarkerSize', 8, 'LineWidth', 2); hold on;
plot(xf, c1(1)+c1(2)*xf, 'r-', 'LineWidth', 2);
plot(xf, c2(1)+c2(2)*xf+c2(3)*xf.^2, 'b--', 'LineWidth', 2);
legend('Data', 'Linear Fit', 'Quadratic Fit', 'Location', 'northwest');
xlabel('x'); ylabel('f(x)'); title('Least Squares Fitting'); grid on;
`,
  },
  {
    id: "5024",
    title:
      "Experiment 10 - least square apporximation (fit a curve of form y=ae^bx) ",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `x = [0.1, 0.2, 0.4, 0.5, 1, 2];
y = [21, 11, 7, 6, 5, 6];
logy = log(y);
X = [ones(length(x),1), x'];
coeff = X \ logy';
a = exp(coeff(1));
b = coeff(2);
y_fit = a * exp(b*x);
R2 = 1 - sum((y - y_fit).^2) / sum((y - mean(y)).^2);
fprintf('y = %.4f * exp(%.4f * x)\\nR² = %.4f\\n', a, b, R2);
x_fit = linspace(min(x), max(x), 100);
figure; hold on;
plot(x, y, 'ko', 'MarkerSize', 8, 'LineWidth', 2);
plot(x_fit, a*exp(b*x_fit), 'r-', 'LineWidth', 2);
text(0.5, 15, sprintf('y = %.2fe^{%.2fx}\\nR² = %.4f', a, b, R2), ...
    'BackgroundColor', 'w', 'EdgeColor', 'k');
xlabel('x'); ylabel('y'); title('Exponential Fit'); grid on; legend('Data', 'Fit');

`,
  },
  {
    id: "5024",
    title:
      "Experiment 10 - least square apporximation (fit a curve of form y=a +bx) ",
    description: "",
    image: "https://placehold.co/600x400/111/333?text=Interpolation",
    skills: ["Numerical Methods"],
    code: `x = [2, 3, 4, 5];
y = [27.8, 62.1, 110, 161];

X = [ones(size(x')) x'];
coeffs = (X' * X) \ (X' * y');
a = coeffs(1); b = coeffs(2);

y_fit = a + b * x;
R2 = 1 - sum((y - y_fit).^2) / sum((y - mean(y)).^2);

fprintf('y = %.4f + %.4fx\nR² = %.4f\n', a, b, R2);

plot(x, y, 'ko', x, y_fit, 'r-','LineWidth', 2);
xlabel('x'); ylabel('y'); title('Linear Fit'); grid on;
legend('Data','Fit','Location','northwest');
text(2.5, 140, sprintf('y = %.2f + %.2fx\nR² = %.4f', a, b, R2), 'Background', 'w', 'EdgeColor', 'k');

`,
  },
];
export const getExperiments = () => {
  return experiments;
};

export const getExperimentById = (id: string | undefined) => {
  if (!id) return null;
  return experiments.find((exp) => exp.id === id) || null;
};
