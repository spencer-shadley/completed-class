const employeeFormatter = employees => {
  employees.forEach(employee => {
    console.log(JSON.stringify(employee));
  });
};

const managersFormatter = managers => {
  managers.forEach(managers => {
    console.log(JSON.stringify(managers));
  });
};

const salaryFormatter = salaries => {
  salaries.forEach(salary => {
    console.log(JSON.stringify(salary));
  });
};

const titleFormatter = titles => {
  titles.forEach(title => {
    console.log(JSON.stringify(title));
  });
};

const departmentFormatter = departments => {
  departments.forEach(department => {
    console.log(JSON.stringify(department));
  });
};

module.exports = {
  employeeFormatter,
  managersFormatter,
  salaryFormatter,
  titleFormatter,
  departmentFormatter
};