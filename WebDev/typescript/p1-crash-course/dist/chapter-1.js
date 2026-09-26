function gatherParty(partyName, ...adventurers) {
    return `${partyName} consists of: ${adventurers.join(", ")}`;
}
const msg = gatherParty("The Fellowship", "Frodo", "Sam", "Gandalf");
console.log(msg);
export {};
// "The Fellowship consists of: Frodo, Sam, Gandalf"
//# sourceMappingURL=chapter-1.js.map