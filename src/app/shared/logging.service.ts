export class LoggingService {
  loggingStatus(id: number, status: string) {
    console.log('The server #' + id + ' has changed status! New status: ' + status);
  }

}


