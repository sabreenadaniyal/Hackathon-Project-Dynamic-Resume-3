//Get reference to the form & diaplay area
const Form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplayElement = document.getElementById("resume-display") as HTMLDivElement

//Handle form submittion
Form.addEventListener("submit", (event: Event) => {
    event.preventDefault();  //prevent page reload

    //collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const Dob = (document.getElementById("Dob") as HTMLInputElement).value
    const Address = (document.getElementById("Address") as HTMLInputElement).value
    const Email = (document.getElementById("email") as HTMLInputElement).value
    const mobile = (document.getElementById("phone") as HTMLInputElement).value
    const Education = (document.getElementById("education") as HTMLInputElement).value
    const Skills = (document.getElementById("skills") as HTMLInputElement).value
    const Experience = (document.getElementById("experience") as HTMLInputElement).value

    //generate the resume content dynamically
    const resumeHTML = `
  <h2><b> Resume </b></h2>
  <h3> Personal Information </h3>
  <p><b> Name:</b>${name}</p>
  <p><b> Dob:</b>${Dob}</p>
  <p><b> Address:</b>${Address}</p>
  <p><b> Email:</b>${Email}</p>
  <p><b> mobile:</b>${mobile}</p>
  
  <h3> Education </h3>
  <p> ${Education} </p>

  <h3> Skills </h3>
  <p> ${Skills} </p>

  <h3> Experience </h3>
  <p> ${Experience} </p> `;

    //Display generated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume diaplay element is missing")
    }
})
