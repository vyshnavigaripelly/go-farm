class Markets extends React.Component {
  render() {
  const listMarkets = this.props.markets.map((market, i) =>
  <div>
    <a href={'/markets/' + market.id} key={i}>{market.name}</a>
  </div>
  );
   return (
     <div><b>Markets:</b>{listMarkets}</div>
   );
  }

}
