import {NotifyType} from './notify-type';

export class Notification {
    public message: string;
    public type: NotifyType;
    constructor(public m: string, type: NotifyType) {
        this.message = m;
        this.type = type;
    }
}
