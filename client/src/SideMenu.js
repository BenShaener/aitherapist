const SideMenu = ({ clearChat, currentModel, setTemperature, temperature }) => 
<aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      <div className="models">
        <label className="side-label" >Temperature</label>
        <input 
          className="select-models" 
          type="number" 
          onChange={(e)=> setTemperature(e.target.value)}
          min="0" 
          max="1" 
          step="0.1"
          value={temperature}
         />
         <Button 
          text="0 - Logical" 
          onClick={()=>setTemperature(0)} />
         <Button 
          text="0.5 - Balanced" 
          onClick={()=>setTemperature(0.5)} />
         <Button 
          text="1 - Creative" 
          onClick={()=>setTemperature(1)} />
         <span className="info">
          The temperature parameter controls the randomness of the model. 0 is the most logical, 1 is the most creative.
         </span>
      </div>
    </aside>

const Button = ({ onClick, text }) =>
  <div 
    className="button-picker" 
    onClick={onClick}>
    {text}
  </div>

export default SideMenu
