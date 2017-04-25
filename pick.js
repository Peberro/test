d=document;

console.info('>>> \/\/PsychoX\/\/');



console.log('>>> Hack for: it-szk0la');
console.log('>>> Version: 2015-10 PICK');

{
  console.log('>>> Using MD5 lib from '+(d.getElementsByTagName('head')[0].appendChild(([s=d.createElement('script')][0].src='http://www.myersdaily.org/joseph/javascript/md5.js')&&s)&&s.src))
}

var a=d.getElementsByClassName('kursListTable')[0].getElementsByTagName('a'),
    b,
    c,
    d=document,
    e,
    f=d.createElement('iframe'),
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o={},
    p,
    q,
    r=[],
    s;

d.body.appendChild(f);

function jsonp(q)
{
  o=q||{};
  console.log('>>> Data loaded ('+Object.keys(q).length+' objects).');
}

i=-1,I=a.length-1;

function next()
{
  ++i;
  
  if(i>=I)
  {
    i=0;
    
    n=1;
    for(m=0,M=a.length;m<M;++m)
      if(r[m]==!1)
        n=0;
    
    if(n)
      console.log('>>> It is probably done, data is ready to harvest.');
  }
  
  f.onload=function()
  {
    f.onload=function(){};
    
    r[i]=!1;
    
    b=f.contentDocument.getElementById('testPytList');
    if(b)
      b=b.getElementsByTagName('table');
    else
    {
      b=f.contentDocument.getElementById('kursContent').getElementsByTagName('input');
      if(b.length>0)
      {
        --i;
        b[0].click();
        setTimeout(next,2222);
      }
      return;
    }
    
    l=md5(a[i].innerHTML.toLowerCase().trim());
    
    if(!o[l])
      o[l]={};
    
    j: for(j=0,J=b.length;j<J;++j)
    {
      g=b[j];
      c=md5(g.getElementsByTagName('th')[0].innerHTML.toLowerCase().replace(/<span class="testpytliczfull"><span class="testpytlicz">.?.?<\/span>\. <\/span>/g,''));
      e=g.getElementsByTagName('label');
      g=g.getElementsByTagName('input');
      
      if(!o[l][c])
        o[l][c]={};
      
      k: for(k=0,K=e.length;k<K;++k)
      {
        h=md5(e[k].innerHTML.toLowerCase());
        
        if(o[l][c][h]==!0)
          continue j;
        else if(o[l][c][h]==!1)
          continue k;
        else
        {
          g[k].checked=!0;
          
          f.contentDocument.getElementById('testSendButton').click();
          
          setTimeout(function()
          {
            f.onload=function(){
              f.onload=function(){};
              
              try
              {
                o[l][c][h]=(f.contentDocument.getElementById('kursContent').getElementsByTagName('b')[0].innerHTML!='0%');
              }
              catch(e)
              {
                console.log(e);
              }
              
              logging&&console.log(l,c,h,o[l][c][h]);
              
              setTimeout(next,2222);
            };
            f.src=a[i].href+',test?'+Math.random()*100000000000000000;
          },2222);
          
          return;
        }
      }
    }
    
    r[i]=!0;
    
    setTimeout(next,2222);
  };
  f.src=a[i].href+',test';
}

function download()
{
  console.log('>>> Data downloading.');
  (q=d.createElement("a")).href=window.URL.createObjectURL(new Blob([('jsonp('+JSON.stringify(o)+');')]),{type:'text/plain'});
  q.download='data.js';
  q.click();
}



{
  console.log('>>> Loading data.');
  (s=d.createElement('script')).src='ftp://localhost/data.js';
  d.getElementsByTagName('head')[0].appendChild(s);
}



setTimeout(function(){next();console.log('>>> Started.');},2222),true;



d.body.removeChild(d.getElementById('ciasteczka_alert'));
f.width=1440;
f.height=720;
logging=1;
