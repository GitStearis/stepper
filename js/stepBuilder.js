class StepBuilder {
  constructor(id) {
    this.step = document.getElementById(id);
  }

  clearElement(element) {
    if (element) {
      while(element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  }

  renderTitle(text) {
    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = text;
    this.step.appendChild(title);
  }

  createCheckbox(name, value) {
    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = name;
    checkbox.value = value;
    return checkbox;
  }

  renderForm(key, answers) {
    this.form = document.createElement("form");
    if (answers.length) {
      answers.forEach(answer => {
        const div = document.createElement("div");
        div.className = "answer";
        const checkbox = this.createCheckbox(key, answer.value);
        const label = document.createElement("p");
        label.innerText = answer.text;
        div.appendChild(checkbox);
        div.appendChild(label);
        this.form.appendChild(div);
      });
      this.form.firstChild.firstChild.checked = true;
      this.step.appendChild(this.form);
    }
  }

  removeButtons() {
    const buttons = document.getElementById("buttons");
    buttons.parentNode.removeChild(buttons);
  }

  renderFinalView(text, results) {
    this.removeButtons();
    const div = document.createElement("div");
    div.className = "result";
    const title = document.createElement("h1");
    title.className = "title";
    title.innerText = text;
    div.appendChild(title);
    for (const [key, value] of Object.entries(results)) {
      const line = document.createElement("p");
      line.innerText = `\t${key}: ${value}`;
      div.appendChild(line);
    }
    this.step.appendChild(div);
  }

  renderStep(step) {
    this.clearElement(this.step);
    if (step.id === "final") {
      this.renderFinalView(step.title, step.results);
    } else {
      this.renderTitle(step.question);
      this.renderForm(step.key, step.answers);
    }
  }

  hideButton(button) {
    if (button) {
      button.classList.add("disabled");
    }
  }

  showButton(button) {
    if (button) {
      button.classList.remove("disabled");
    }
  }

  getCheckedRadioButton() {
    if (this.form) {
      return this.form.querySelector("input:checked");
    }
  }

  checkRadioButtonByValue(value) {
    this.form.querySelector(`input[value='${value}']`).checked = true;
  }
};