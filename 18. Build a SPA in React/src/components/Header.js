import React,{Component} from 'react';

export default class Header extends Component{
  render(){
      return(
    <div>
        <header>
            <nav class="cf">
                <ul class="cf">
                    <li class="hide-on-small"> <a href="#showcase">Being Geeky</a></li>
                    <li> <a href="#tutorial">Tutorials</a></li>
                    <li> <a href="#video">Video</a></li>
                    <li> <a href="#coupon">Coupons</a></li>
                </ul> <a href="#" id="openup">Being Geeky</a>
            </nav>
        </header>
    </div>
  )
}
}
