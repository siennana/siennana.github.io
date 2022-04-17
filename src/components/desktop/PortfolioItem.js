import '../../pages/PortfolioItem.css';

function PortfolioItem(props) {
	return (
		<div>
      <div className='portfolioItem-wrapper'>
        <h2 className='portfolioItem-header'>{props.title}</h2>
        <p className='portfolioItem-date'>{props.dateRange}</p>
        <p className='portfolioItem-description'>{props.description}</p>
      </div>
		</div>
	);
}
  
export default PortfolioItem;