interface getPref {
  message: string;
  result: [
    {
      prefCode: number;
      prefName: string;
    }
  ];
}
export default getPref;
