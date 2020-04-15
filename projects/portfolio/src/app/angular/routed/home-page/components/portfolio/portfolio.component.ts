import { Component, OnInit } from '@angular/core';
import { blogCardView } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  blogCardViews: Array<blogCardView> = new Array<blogCardView>();

  ngOnInit(): void {
    this.buildBlogCards();
  }

  private buildBlogCards() {

    let card6= new blogCardView();
    card6.author = 'James Pickup';
    card6.content = 'gRPC is a language agnostic, high-performance Remote Procedure Call (RPC) framework. This is a very basic example of a .Net core implementation with client and server.'
    card6.date = '2020',
    card6.imageUrl= '/assets/image/portfolio/grpc.jpg';
    card6.readMore = 'https://github.com/CherryCoder91/grpc-netcore-demo';
    card6.subTitle = 'Using gRPC in .NET Core 3';
    card6.tags = new Array<string>('gRPC','.proto', '.NetCore');
    card6.title = 'gRPC .NET Core Demo'
    this.blogCardViews.push(card6);

    let card5 = new blogCardView();
    card5.author = 'James Pickup';
    card5.content = 'gRPC is a language agnostic, high-performance Remote Procedure Call (RPC) framework. This is a very basic example of a .Net core implementation with client and server.'
    card5.date = '2019',
    card5.imageUrl= '/assets/image/portfolio/rabbitmq.jpg';
    card5.readMore = 'https://github.com/CherryCoder91/rabbitmq-sdk-demo';
    card5.subTitle = 'Exploring the basics of RabbitMQ';
    card5.tags = new Array<string>('RabbitMQ','Que', 'Message Broker');
    card5.title = 'RabbitMQ Basics'
    this.blogCardViews.push(card5);

    let card4 = new blogCardView();
    card4.author = 'James Pickup';
    card4.content = 'A small experiment showing how a website can emulate the interactivity of OSX. Written using mostly html & css inside an Angular application.'
    card4.date = '2018',
    card4.imageUrl= '/assets/image/portfolio/osx-desktop.png';
    card4.readMore = 'https://github.com/CherryCoder91/osx-desktop';
    card4.subTitle = 'Virtual OSX Desktop experience';
    card4.tags = new Array<string>('OSX','Desktop-Experience', 'Angular');
    card4.title = 'OSX Desktop'
    card4. liveExample = 'https://james-pickup.firebaseapp.com/';
    this.blogCardViews.push(card4);

    let card3 = new blogCardView();
    card3.author = 'James Pickup';
    card3.content = 'Some very basic examples of some simple concepts within WEBGL scenes.'
    card3.date = '2015',
    card3.imageUrl= '/assets/image/portfolio/webglsimpleconcepts.jpg';
    card3.readMore = 'https://github.com/CherryCoder91/webgl-simpleconcepts-demo';
    card3.subTitle = 'Exploring basic 3D rendering concepts';
    card3.tags = new Array<string>('WebGL','javascript', '3d', 'interaction');
    card3.title = 'WebGL Simple Concepts'
    this.blogCardViews.push(card3);

    let card2 = new blogCardView();
    card2.author = 'James Pickup';
    card2.content = 'An example of how the DOM interaction can be used to influence a WEBGL render. The example is also programmed to use a software renderer as a fall back to WEBGL and hardware acceleration. The two libraries CanvasRenderer and Projector achieve this. There is also some minimal logic in the WEBGL controller to apply its use.'
    card2.date = '2015',
    card2.imageUrl= '/assets/image/portfolio/webgldominteraction.jpg';
    card2.readMore = 'https://github.com/CherryCoder91/webgl-dom-interaction-demo';
    card2.subTitle = 'Exploring viewport interaction with DOM';
    card2.tags = new Array<string>('WebGL','javascript', '3d', 'interaction');
    card2.title = 'WebGLDomInteraction'
    this.blogCardViews.push(card2);

    let card1 = new blogCardView();
    card1.author = 'James Pickup';
    card1.content = 'GeoMessage is an iOS app written in Objective-C built by James Pickup in 2012 that allows users to post messages to a map tagged at their physical geographic location. Users may then view a map on which messages can be opened from.'
    card1.date = '2012',
    card1.imageUrl= '/assets/image/portfolio/geomessage.jpg';
    card1.readMore = 'https://github.com/CherryCoder91/geo-message';
    card1.subTitle = 'Maps based messaging experience using location services (iOS)';
    card1.tags = new Array<string>('Objective-C','xCode', 'iOS', 'location-services');
    card1.title = 'GeoMessage'
    this.blogCardViews.push(card1);
    
    let card = new blogCardView();
    card.author = 'James Pickup';
    card.content = 'Chester 360 is a iOS iOS application which includes the implementation of a 360° panoramic engine created using native iOS technologies (QuartzCore) and written in objective-c utilising GPS anf gyroscopic sensors. Fundamentally it represents a Google street view style experience developed on the iOS platform around the time google street view itself was being developed.'
    card.date = '2012',
    card.imageUrl= '/assets/image/portfolio/chester360.jpg';
    card.readMore = 'https://github.com/CherryCoder91/chester360';
    card.subTitle = 'Street view experience in QuartzCore with Gyroscopic interactivity';
    card.tags = new Array<string>('Objective-C','xCode', 'iOS', 'panoramic-engine');
    card.title = 'Chester360'
    this.blogCardViews.push(card);
    
  }

}
