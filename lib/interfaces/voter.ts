export default class DiscordVoter {
    public username: string;
    public id: string;

    constructor(pkt: any) {
        this.username = pkt.username;
        this.id = pkt.id;
    }
}