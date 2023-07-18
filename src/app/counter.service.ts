export class CounterService{
    activeToInactiveCounter=0;
    InactiveToactiveCounter=0;

    increamentActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('Active To Inactive : '+this.activeToInactiveCounter);
    }

    increamentInactiveToActive(){
        this.InactiveToactiveCounter++;
        console.log('Inactive To Active : '+this.InactiveToactiveCounter);
    }
}