module.exports = {
  selectCurrentManagers: () => `SELECT dpt.dept_name, e.first_name, e.last_name
    FROM departments dpt
    JOIN dept_manager
    ON dpt.dept_no = dept_manager.dept_no
    JOIN employees e
    ON e.emp_no = dept_manager.emp_no
    WHERE dept_manager.to_date = "9999-01-01"`,

  selectRandomEmployees: () => `SELECT e.emp_no, e.first_name, e.last_name
    FROM employees e
    ORDER BY RAND()
    LIMIT 10`,

  selectDepartments: () => `SELECT dept_no, dept_name 
  FROM departments`,

  selectDepartmentsWithoutManagers: () => `SELECT d.dept_no, d.dept_name
    FROM departments d
    LEFT JOIN dept_manager dm ON d.dept_no = dm.dept_no AND dm.to_date > NOW()
    WHERE dm.dept_no IS NULL;`,

  // Search by employee last name
  selectEmployee: search => `SELECT e.emp_no, e.first_name, e.last_name
    FROM employees e
    WHERE e.last_name LIKE "%${search}%"
    LIMIT 30`,

  // get salary history for a given employee by emp_no
  selectSalaryHistory: id => `SELECT e.emp_no, e.first_name, e.last_name, s.from_date, s.to_date, s.salary
    FROM employees e
    JOIN salaries s
    ON s.emp_no = e.emp_no AND e.emp_no = ${id}`,

  // get title history for a given employee by emp_no
  selectTitleHistory: id => `SELECT e.emp_no, e.first_name, e.last_name, t.from_date, t.to_date, t.title
    FROM employees e
    JOIN titles t
    ON t.emp_no = e.emp_no AND e.emp_no = ${id}`,

  createEmployee: (birthDate, firstName, lastName) =>
    `INSERT INTO employees VALUES(null, '${birthDate}', '${lastName}', '${firstName}', DATE_FORMAT(NOW(), '%Y-%m-%d'))`,

  addEmployeeTitle: (empNum, title) =>
    `INSERT INTO titles VALUES('${empNum}', '${title}', DATE_FORMAT(NOW(), '%Y-%m-%d'), '9999-01-01')`,

  updateOldEmployeeTitle: empNum =>
    `UPDATE titles SET to_date = DATE_FORMAT(NOW(), '%Y-%m-%d') WHERE emp_no = ${empNum} AND to_date = '9999-01-01')`,

  addEmployeeSalary: (empNum, salary) =>
    `INSERT INTO salaries VALUES('${empNum}', '${salary}', DATE_FORMAT(NOW(), '%Y-%m-%d'), '9999-01-01')`,

  updateOldEmployeeSalary: empNum =>
    `UPDATE titles SET to_date = DATE_FORMAT(NOW(), '%Y-%m-%d') WHERE emp_no = ${empNum} AND to_date = '9999-01-01')`,

  updateEmployee: (birthDate, lastName, firstName, hireDate) =>
    `UPDATE employees SET
      birth_date='${birthDate}',
      last_name='${lastName}',
      first_name='${firstName}',
      hire_date='${hireDate}')`
};

// Promotions this year

// select employees of a given age

// select department and manager for a given emp_no

// `select emp_no, count(title) as emp_titles from titles group by emp_no having emp_titles > 1 order by emp_titles`
