import React, {Component} from "react"
import "./../css/theme.css"
class Theme extends Component{
    constructor(props){
        super(props)
        this.state ={
          currentTheme:'light',
          position: 'flex-start',
          themes:{
            light:{
             'background': '#F9F9F9',
             'primary-color': '#FFB60A',
             'title-color':'#C40000',
             'main-color':'#fff',
             'main-shadow': '#00000029',
             'links-color':'#15C2DE',
             'main-overlay':'rgba(0,0,0,0.7)',
             'secondary-text-color':'#000000',
             'input-border':'#919191',
             'portfolio-nav':'#434343',
             'footer-theme':'#065764',
             'footer-border-color':'#000808',
             'slide-background':'#E8E8E8',
             'knob-color':'#15C2DE'
            },
            dark:{
              'background':'#010814',
              'main-color':'#fff',
              'portfolio-nav':'#fff',
              'secondary-text-color':'#fff',
              'title-color':'#FFB60A',
              'button-text-color':'#000000',
              'footer-border-color':'#fff',
              'footer-theme':'#fff',
              'slide-background':'#15C2DE',
              'knob-color':'#fff'
            }
          }
        }
      }
      componentDidMount(){
       
        const switchSlide = document.querySelector('.theme-mode');
        const theme = localStorage.getItem('theme');
        if(theme != null){
         switchSlide.style.justifyContent= 'flex-end'
         this.setState({
             currentTheme:'light', position: 'flex-start'})
         this.setTheme('dark')
        }else{
         this.setTheme('light')
         switchSlide.style.justifyContent= 'flex-start'
         this.setState({
          currentTheme:'dark', position: 'flex-end'})
        }
 
 
       }
      setTheme = (currentTheme)=>{
        const theme = this.state.themes[currentTheme];
          Object.keys(theme).forEach((key)=>{
            const cssKey = `--${key}`;
            const cssValue = theme[key];
            //document.getElementsByTagName('html')[0].style.setProperty(cssKey,cssValue)
            document.body.style.setProperty(cssKey, cssValue);
          })
      }
      
      toggleTheme = ()=>{
        const switchSlide = document.querySelector('.theme-mode');
        if(this.state.position === 'flex-start'){
            localStorage.removeItem('theme');
            this.setTheme(this.state.currentTheme)
          switchSlide.style.justifyContent= this.state.position;
          this.setState({
            currentTheme:'dark', position: 'flex-end'})
        }else{
          localStorage.setItem('theme','dark');
          switchSlide.style.justifyContent= 'flex-start';
          this.setTheme(this.state.currentTheme)
          switchSlide.style.justifyContent= this.state.position;
          this.setState({
            currentTheme:'light',
            position:'flex-start'
          })
        }
      }
    render(){
        return(
            <div className="theme-mode" onClick={this.toggleTheme}>
                <div className="theme-button"></div>
            </div>
        )
    }
}
export default Theme;
