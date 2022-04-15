import '../../pages/PortfolioItem.css';

function PortfolioItem(props) {
	return (
		<div>
			<h2 className='portfolioItem-header'>{props.title}</h2>
			<p className='portfolioItem-date'>{props.dateRange}</p>
			<p className='portfolioItem-description'>{props.description}</p>
		</div>
	);
}
  
export default PortfolioItem;