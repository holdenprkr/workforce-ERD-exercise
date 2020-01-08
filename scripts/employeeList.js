import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import { useDepartments } from "./departmentsDataProvider.js"
import { useLocations } from "./locationsDataProvider.js"
import Employee from "./employee.js"


const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            const computer = computers.find(computer => computer.id === employee.computerId)
            const department = departments.find(department => department.id === employee.departmentId)
            const location = locations.find(location => location.id === employee.locationId)
            
            const html = Employee(employee, computer, department, location)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList