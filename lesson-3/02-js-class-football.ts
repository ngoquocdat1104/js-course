class Player {
    name: string;
    kit: number;
    position: string;

    constructor(name: string, kit: number, position:string){
        this.name = name;
        this.kit = kit;
        this.position = position;
    }
}

class Team {
    name: string;
    players: Player[];

    constructor(name: string){
        this.name = name;
        this.players = []
    }

    addPlayer(newPlayer: Player): void {
        this.players.push(newPlayer);
        console.log(`Added ${newPlayer.name} to ${this.name}`);
        console.log(`-> The new player's position will be ${newPlayer.position}\n`);
    }

    listPlayers(): void {
        console.log(`Team: ${this.name}`);
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. - ${player.name} - Kit Number ${player.kit} - Position:${player.position}`)
        });
    }
}

const phao_thu = new Team("Arsenal");
const mo_u = new Team("MU");

const player1 = new Player("Alaba", 2, "LB");
const player2 = new Player("Bruno", 8, "CAM");
const player3 = new Player("Cong Phuong", 10, "ST");
const player4 = new Player("Courtois", 1, "GK");

phao_thu.addPlayer(player1);
phao_thu.addPlayer(player2);
mo_u.addPlayer(player3);
mo_u.addPlayer(player4);

phao_thu.listPlayers();
mo_u.listPlayers();