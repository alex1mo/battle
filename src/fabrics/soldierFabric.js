import { Soldier } from "../../models/soldier";

let instance = null;


export class SoldierFabric {
    constructor() {
        instance = instance && this;
    }

    static getInstance() {
        return new SoldierFabric()
    }

    createSoldier(data) {
        return new Soldier(...data)
    }

    createSoldier(arr) {
        return arr.map(e => {
            return this.createSoldier(e)
        })
    }
}