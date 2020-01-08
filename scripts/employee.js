const Employee = (person, computer, department, location) => {
  return `
      <section class="employee">
          <header class="employee__name">
              <h2>${person.lastName}, ${person.firstName}</h2>
          </header>
          <section class="employee__computer">
            Currently using a ${computer.year} ${computer.model}
          </section>
          <section class="employee__department">
            Works in the ${department.name} department
          </section>
          <section class="employee__location">
            Works at the ${location.place} office
           </section>
      </section>
  `
}

export default Employee