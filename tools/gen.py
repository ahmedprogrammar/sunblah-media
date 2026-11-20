import sys,json
tpl=open('tpl.html').read()
for d in json.load(open('posts.json')):
    h=tpl
    for k,v in d.items(): h=h.replace('{{'+k+'}}',v)
    open(d['id']+'.html','w').write(h)
