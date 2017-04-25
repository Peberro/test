d=document;

console.info('>>> xdddd');



console.log('>>> Hack for: it-szk0la');
console.log('>>> Version: 2015-10 SHOT');

{
  console.log('>>> Using MD5 lib from '+(d.getElementsByTagName('head')[0].appendChild(([s=d.createElement('script')][0].src='https://rawgit.com/Peberro/test/master/md5.js')&&s)&&s.src))
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
    r,
    s;

d.body.appendChild(f);

function jsonp(q)
{
  o=q||{};
  console.log('>>> Data loaded ('+Object.keys(o).length+' objects).');
}

i=-1,I=a.length-1;

function next()
{
  ++i;
  
  f.onload=function()
  {
    f.onload=function(){};
    
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
    {
      console.warn('>>> There is no data for '+l+' ('+i+')');
      setTimeout(next,2222);
      return;
    }
    
    j: for(j=0,J=b.length;j<J;++j)
    {
      g=b[j];
      c=md5(g.getElementsByTagName('th')[0].innerHTML.toLowerCase().replace(/<span class="testpytliczfull"><span class="testpytlicz">.?.?<\/span>\. <\/span>/g,''));
      e=g.getElementsByTagName('label');
      g=g.getElementsByTagName('input');
      
      if(!o[l][c])
      {
        console.warn('>>> Incomplete data for '+l+' ('+i+'). Unknown question '+c);
        setTimeout(next,2222);
        return;
      }
      
      r=0;
      
      for(k=0,K=e.length;k<K;++k)
      {
        h=md5(e[k].innerHTML.toLowerCase());
        
        if(o[l][c][h]==!0)
        {
          g[k].checked=!0;
          ++r;
        }
        else
        {
          g[k].checked=!1;
        }
      }
      
      if(!r)
      {
        console.warn('>>> Incomplete data for '+l+' ('+i+'). Unknown answer for question '+c);
        setTimeout(next,2222);
        return;
      }
    }
    
    f.contentDocument.getElementById('testSendButton').click();
    
    setTimeout(function(){
      f.onload=function(){
        f.onload=function(){};
        
        try
        {
          p=f.contentDocument.getElementById('kursContent').getElementsByTagName('b')[0].innerHTML!='100%'
        }
        catch(e)
        {
          console.log(e);
        }
        
        p&&console.error('>>> Our data failed in '+l+' ('+i+')');
        
        if(i==I)
        {
          console.log('>>> Done.');
          return;
        }
        
        setTimeout(next,2222);
      };
      f.src=a[i].href+',test?'+Math.random()*100000000000000000;
    },2222);
  };
  f.src=a[i].href+',test';
}



{
  console.log('>>> Loading data.');
  (s=d.createElement('script')).src='https://rawgit.com/Peberro/test/master/data.js';
  d.getElementsByTagName('head')[0].appendChild(s);
}



setTimeout(function(){next();console.log('>>> Started.');},2222),true;



d.body.removeChild(d.getElementById('ciasteczka_alert'));
f.width=1440;
f.height=720;

