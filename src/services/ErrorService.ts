export class ErrorService {
  private errorMessages: string;

  constructor(e?: string) {
    this.errorMessages = e || 'Something went wrong...';
  }

  showError() {
    console.error(this.errorMessages);
    alert(this.errorMessages);
  }
}
