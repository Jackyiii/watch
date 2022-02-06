export class Subject {
    private today: Date;
    private observers: Observer[] = [];

    constructor(today: Date) {
        this.today = today;
    }

    setHours(today: Date): void {
        this.today = today;
    }

    addHour(): void {
        this.today.setHours(this.today.getHours() + 1);
        this.notify();
    }

    addMinute(): void {
        this.today.setMinutes(this.today.getMinutes() + 1);
        this.notify();
    }

    notify(): void {
        this.observers.forEach((obj) => {
            obj.formatDate(this.today);
        });
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
}

export class Observer {
    private hour = "";
    private seconds = "";
    constructor() {
        this.formatDate(new Date());
    }

    formatDate(today: Date): void {
        this.hour = this.rezero(today.getHours()) + ":" + this.rezero(today.getMinutes());
        this.seconds = today.getSeconds().toString();
    }

    getHour(): string {
        return this.hour;
    }

    getSeconds(): string {
        return this.seconds;
    }

    rezero(num: number) {
        return num >= 10 ? num : '0' + num
    }
}
