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
             'calendar-slide':'#EFFAFF',
             'client': '#FFFFFF',

             'title':'#1C4569',
             'client-title':'#160C28',
             'light-text': '#707070',
             'join-us':'#160C28',
             'dot':'#A8C1E3',
             'card':'#FFFFFF',
             'help-text':'#AFAFAF',
             'tab-title':'#F2F2F2',
             'tab-body':'#FFFFFF',
             'about-title':'#174F7F',
             'see':'#707070',
             'footer-line':'#FFFFFF',
             'footer-bg':'#8FB7C1',
             'theme':'#FFFFFF',
             'knob':'#133260'
            },
            dark:{
              'background':'#0B0516',
              'calendar-slide':'#000D13',
              'client':'#000000',
              'title':'#28C2FF',
              'client-title':'#28C2FF',
              'light-text': '#FFFFFF',
              'join-us':'#FFFFFF',
              'dot':'#ECC308',
              'card':'#000D13',
              'help-text':'#FFFFFF',
              'tab-title':'#0030AB',
              'tab-body':'#000000',
              'about-title':'#28C2FF',
              'see':'#28C2FF',
              'footer-line':'#28C2FF',
              'footer-bg':'#02485A',
              'theme':'#274DAD',
              'knob':'#000000'
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
