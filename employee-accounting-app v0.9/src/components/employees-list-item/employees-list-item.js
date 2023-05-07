import "./employees-list-item.css"


const EmployeersListItem = (props) => {

    const {name, salary, onDelete, id, increase, like, onToggleProp} = props;
    let classNames = "list-group-item d-flex justify-content-between";
    if(increase){classNames = classNames += ' increase'}
    if(like){classNames = classNames += ' like'}


    
    return (
        <li className= {classNames}>
            <span className="list-group-item-label"
            data-toggle = "like"
            onClick={onToggleProp}>{id}. {name}</span>
            <input 
            type="text" 
            className="list-group-item-input" 
            defaultValue={salary + ' $'}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    data-toggle = "increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
                <span></span>
            </div>
        </li>
    );
}     



export default EmployeersListItem;