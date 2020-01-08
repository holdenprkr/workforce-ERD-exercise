import { getEmployees } from "./employeeDataProvider.js";
import { getComputers } from "./computerDataProvider.js";
import { getDepartments } from "./departmentsDataProvider.js";
import { getLocations } from "./locationsDataProvider.js";
import EmployeeList from "./employeeList.js";

getEmployees()
  .then(getComputers)
  .then(getDepartments)
  .then(getLocations)
  .then(EmployeeList)
