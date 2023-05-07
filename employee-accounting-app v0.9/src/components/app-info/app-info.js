import './app-info.css';

const AppInfo = ({peopleIncr, people}) => {

    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании Sindikat <br /> (внимание! используется локальное хранилище)</h1>
            <h2>Общее число сотрудников: {people}</h2>
            <h2>Премию получат: {peopleIncr}</h2>
        </div>
    )
}
export default AppInfo;