import html2canvas from 'html2canvas';
import './ComponentToImage.css';

const HtmlCanvasDemo = () =>{

    const exportAsPicture = () => {
        var html = document.getElementsByTagName('HTML')[0]
        var body =  document.getElementsByTagName('BODY')[0]
        var htmlWidth = html.clientWidth;
        var bodyWidth = body.clientWidth;

        var data = document.getElementById('card')
        var newWidth = data.scrollWidth - data.clientWidth


        if (newWidth > data.clientWidth){
            htmlWidth += newWidth
            bodyWidth += newWidth
        }

        html.style.width = htmlWidth + 'px'
        body.style.width = bodyWidth + 'px'

        html2canvas(data).then((canvas)=>{
            var image = canvas.toDataURL('image/png', 1.0);
            return image
        }).then((image)=>{
            saveAs(image, 'year-in-music.png')
            html.style.width = null
            body.style.width = null
        })
    }

    const saveAs = (blob, fileName) =>{
        var elem = window.document.createElement('a');
        elem.href = blob
        elem.download = fileName;
        elem.style = 'display:none;';
        (document.body || document.documentElement).appendChild(elem);
        if (typeof elem.click === 'function') {
            elem.click();
        } else {
            elem.target = '_blank';
            elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
            }));
        }
        URL.revokeObjectURL(elem.href);
        elem.remove()
    }

    return (
    <div className="row">
   <div id="card" className="col-8 card" style={{width: "24rem"}}>
     <img className="card-img-top" src="assets/listenbrainz-logo.svg" style={{width: "16rem", padding: "1rem"}} alt="ListenBrainz"/>
     <h2 className="card-title">Year In Music 2021</h2>
     <h5 className="card-title">akshaaatt's Top Artists</h5>
     <ul className="list-group list-group-flush">
       <li className="list-group-item">Linkin Park</li>
       <li className="list-group-item">Machine Gun Kelly</li>
       <li className="list-group-item">Troye Sivan</li>
       <li className="list-group-item">Bring Me The Horizon</li>
       <li className="list-group-item">Maroon 5</li>
       <li className="list-group-item">Mike Shinoda</li>
       <li className="list-group-item">Lauv</li>
       <li className="list-group-item">Arctic Monkeys</li>
{/*        <li className="list-group-item">Halsey</li> */}
{/*        <li className="list-group-item">Ed Sheeran</li> */}
     </ul>
     <div className="card-body">
        <p className="card-text"><small className="text-muted">Find your Stats at <a href="https://listenbrainz.org">listenbrainz.org</a></small></p>
     </div>
   </div>
    <button classNameName="col-4" onClick={exportAsPicture}>screenshot</button>
    </div>
   )
};

export default HtmlCanvasDemo;