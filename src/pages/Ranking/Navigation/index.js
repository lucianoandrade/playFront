import React from 'react';
import ReactPaginate from 'react-paginate';

import iconNext from '../../../assets/icons/Direita.png';
import iconPreview from '../../../assets/icons/Esquerda.png';

import './styles.scss';

const Navigation = (props) => {

    const { page, total, per_page } = props.pagination
    console.log('::::::props.pagination::::::', props.pagination )
   
    const handlePageClick = (total) => {
        const selectedPage = total.selected;
        console.log('==>selectedPage<==' , selectedPage + 1)
        props.setPage(selectedPage + 1)
    }
        
    const countPages =  ((total - (total % per_page)) / per_page) + ((total % per_page) !== 0 ? 1 : 0)
    console.log(":::::CONUNT PAGE", countPages )
    const listPages = new Array(parseInt(countPages)).fill(null)
    console.log(":::::LIST PAGE", listPages)
  
    return (
        <ReactPaginate
            previousLabel={<div className="icon"><img src={iconPreview} alt="next" /></div>}
            nextLabel={ <div className="icon"><img src={iconNext} alt="next" /></div>}
            breakLabel={'...'}
            pageCount={countPages}
            onPageChange={handlePageClick}
            forcePage={page - 1}
            breakClassName={'rest'}
            containerClassName={'containerNavigation'}
            pageClassName={'page'}
        />
    )
}

export default Navigation;