class StepperService {
  constructor(id, data) {
    this.stepper = new Stepper(data);
    this.builder = new StepBuilder(id);
    this.backButton = document.getElementById("back");
    this.nextButton = document.getElementById("next");
    this.checkboxHistory = [];
    this.builder.renderStep(this.stepper.currentStep);
    this.connectHandlers();
  }

  connectHandlers() {
    if (this.backButton && this.nextButton) {
      this.backButton.onmousedown = this.previousStep.bind(this);
      this.nextButton.onmousedown = this.nextStep.bind(this);
    }
  }

  previousStep() {
    this.stepper.back();
    this.builder.renderStep(this.stepper.currentStep);
    this.builder.checkRadioButtonByValue(this.checkboxHistory.pop());
    if (this.stepper.isCurrentFirst()) {
      this.builder.hideButton(this.backButton);
    }
  }

  nextStep() {
    const checkedValue = this.builder.getCheckedRadioButton().value;
    this.checkboxHistory.push(checkedValue);
    if (checkedValue) {
      this.stepper.answer(checkedValue);
      this.stepper.next();
      this.builder.renderStep(this.stepper.currentStep);
      if (!this.stepper.isCurrentFirst()) {
        this.builder.showButton(this.backButton);
      }
    }
  }
}