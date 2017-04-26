d=document;

console.info('>>> \/\/PsychoX\/\/');



console.log('>>> Hack for: it-szk0la');
console.log('>>> Version: 2015-10 ONCE');

{
  console.log('>>> Using MD5 lib from '+(d.getElementsByTagName('head')[0].appendChild(([s=d.createElement('script')][0].src='https://rawgit.com/Peberro/test/master/md5.js')&&s)&&s.src))
}

var a,
    b,
    c,
    d=document,
    e,
    f,
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

function jsonp(q)
{
  o=q||{};
  console.log('>>> Data loaded ('+Object.keys(o).length+' objects).');
}

function once()
{
  b=d.getElementById('testPytList');
  if(b)
    b=b.getElementsByTagName('table');
  else
  {
    b=d.getElementById('kursContent').getElementsByTagName('input');
    if(b.length>0)
    {
      b[0].click();
      setTimeout(once,2222);
    }
    return;
  }
  
  l=md5.js(d.getElementById('mainTitleK').innerHTML.slice(0,-35).toLowerCase().trim());
  
  if(!o[l])
  {
    console.warn('>>> There is no data for '+l);
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
      console.warn('>>> Incomplete data for '+l+'. Unknown question '+c);
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
      console.warn('>>> Incomplete data for '+l+'. Unknown answer for question '+c);
      return;
    }
  }
  
  d.getElementById('testSendButton').click();
  
  setTimeout(function(){
    try
    {
      p=d.getElementById('kursContent').getElementsByTagName('b')[0].innerHTML!='100%'
    }
    catch(e)
    {
      console.log(e);
    }
    
    p&&console.error('>>> Our data failed in '+l);
    
    console.log('>>> Done.');
  },2222);
}



{
  console.log('>>> Loading data.');
  (s=d.createElement('script')).src='https://rawgit.com/Peberro/test/master/data.js';
  d.getElementsByTagName('head')[0].appendChild(s);
}



setTimeout(function(){once();console.log('>>> Started.');},2222),true;

