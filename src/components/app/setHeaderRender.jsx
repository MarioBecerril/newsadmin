const setHeaderRender = ({nameHeader, changeDelay, tableManager, column}) => {

    return (<>
        <table><tbody>
            <tr><td>{nameHeader}</td></tr>
            <tr><td><input type="text" style={{height:20}} onChange={e => changeDelay(((!isNaN(e.target.value))?(parseInt(e.target.value)):('*'+e.target.value+'*')), tableManager, column)} /></td></tr>
        </tbody></table>  </>);

}
export default setHeaderRender;