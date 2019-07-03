export class Article{
    title: string;
    link: string;
    votes: number;
    desc: string;

    constructor(title: string, link: string, desc: string, votes?: number){
        this.title = title;
        this.link = link;
        this.desc = desc;
        this.votes = votes || 0;
    }

    voteUp(){
        this.votes +=1;
    }

    voteDown(){
        this.votes -=1;
    }

    domain(): string {
        try {
        const domainAndPath: string = this.link.split('//')[1];
        return domainAndPath.split('/')[0];
        } catch (err) {
        return null;
        }
        }
}