function Result(props) 
{
  return(
    <>
      <center>
	<h2> {props.title} </h2>
	<img src={props.urlToImage}></img>
	<br/>
	<a href={props.url}>Readmore</a>
	<br/>
	<hr/><hr/>
      </center>
    </>
  );
}
export default Result;		  