export class Prize {
  label: String;
  isClaimed: boolean;

  constructor(label, isClaimed = false) {
    this.label = label;
    this.isClaimed = isClaimed
  }
}