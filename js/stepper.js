class Stepper {
  constructor(steps) {
    this.steps = steps;
    this.currentStep = this.steps.first;
    this.currentKey = "first";
    this.results = {};
  }

  isCurrentFirst() {
    return this.currentStep === this.steps.first;
  }

  isCurrentLast() {
    return this.currentStep === this.steps.last;
  }

  back() {
    if (!this.isCurrentFirst()) {
      this.currentKey = this.currentStep.previous;
      this.currentStep = this.steps[this.currentStep.previous];
    }
  }

  next() {
    if (!this.isCurrentLast()) {
      this.currentKey = this.currentStep.next;
      this.currentStep = this.steps[this.currentStep.next];
    } else {
      this.currentKey = "final";
      this.currentStep = this.steps[this.currentKey];
    }
  }

  answer(value) {
    if (value) {
      this.steps.final.results[this.currentStep.value] = value;
      const answer = this.currentStep.answers.find(answer => answer.value === value);
      if (answer && answer.next) {
        this.steps[this.currentKey].next = answer.next;
        this.steps[answer.next].previous = this.currentKey;
      }
    }
  }
};