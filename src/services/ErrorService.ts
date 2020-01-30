export class ErrorService {
  private errorMessages: any;

  constructor(e?: any) {
    this.errorMessages = e || '';
  }

  showError() {
    console.error(this.errorMessages);
    alert(this.errorMessages);
  }
}
