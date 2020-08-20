var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    express = require("express"),
    app = express();

var bodyParser       = require("body-parser"),
	mongoose       	 = require("mongoose"),
	methodOverride   = require("method-override"),
	expressSanitizer = require("express-sanitizer"),
	express 		 = require("express"),
	app		         = express();

//app config

//server requirements

const http = 'http';
const hostname = '127.0.0.1';
const port = 3000;

// APP CONFIG
mongoose.connect("mongodb://localhost/blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Schema for blog

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
);
  
mongoose.connect("mongodb://localhost/CODE_blog");
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//server requirements

const http 	   = require("http");
const hostname = "127.0.0.1";
const port     = 3000;

//mongoSchema

var blogSchema = new mongoose.Schema({
	title : String,
	body : String,
	image : String,
	created : {type : Date , default : Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "windows 7",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUQEBAQEBUVFRUQDxAQEBAQEBUVFRUWFhUVFRYYHSggGBolHRUVITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS8tKy0tLS0tLSstLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEgQAAEEAAQCBwQGBA0DBQAAAAEAAgMRBBIhMQUGE0FRYXGBkSIyobEHFEJywdEjM1KyFSQ1Q1RidIKSlKKzwjSD4SVEU3Oj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADgRAAICAQIDAwwBBAICAwAAAAABAgMRBDESIUETUWEFFCIycYGRobHB0fAzQlLh8RVyIzQkU4L/2gAMAwEAAhEDEQA/AMZemSOE2AqaRU2UuIcXgjjkhe/K8scQCHa5mkDWqWa6cVLDfQ16eMnHK7zi+DcIfiS4MLQWgE5r1u/yWCMW+R0Zz4SDiWAfBJ0cgF0DoQRRUZJp4Y4yUllFWlHBIvjhE+QSdG8tcA4OAsUfBaI6eTimih3wTw2OwsRDmggjUCjp1q+uDXJldkk02juHMvRdSS9Fnnq36SOQx3A52ucXRncmxqNSuQ6cnoo3RxuUBAW7gjxBCSrwT409i1hm29o/rD5q1Ipm+TO9eQNyB46Lalk5Ww14SYzLxTg13tENs0LNX4Xur65xUVlkeCTfJEY1218FdlMWGtzK4/HbWfePyWHXRykbtDLDl7DGEJvY+i5yrZ0ONEzWEbgjx0V0U1uVt52OowI/RM+6F0a16KONc/8AyS9ocRYGikKvcpyXV33pTXJmiOMmD9Vljkz5Do4kaWFx1Cdc+LGx0+1rsjw5LrONn7UY76JHwK2R17/qiZ5aJf0yLMfFYzvmb4i/kr46yt78imWkmtiSXEscx1OafZdpdHY9RU52wlB4fQjCqcZrK6kjRoPAfJKK2K2+bEQrMIMjHhJokiFwWexFiZXlxnRnLlvru9VQ9T2b4Wi2NPGs5HM4hGd7HiPyVkdXW9+Qnp5oMkjXbOB81JzjJcmJQkt0TUrcFeRtKOB5OvJSSM7Y17lZFFU5HJ8xcNmkn6RkT3NygW0WLF2sGqrbtz4HT0NkVVz72X+SsO+N0rntc0ENaLFaiydPMJV1tssvugklkXHuCyYjEGRrmBuUNFk3pfUB3qyWmcmUR1sILGGck+OjXfSyuCR0FLJ6XwQg4SEAg1Gy6INeyN10KPURx9T679ocTG07tB8QCtUVncwWSa2K2ImEbS87NGY+SdjxBsVEXKxJd5JwzjTMQ8sa1woZrNVuB+KxRafI6s4uKyy5Lho3e8xrvEC1PBQ5GdNweHMHBuUg2K7lJVxZGVs1yyTYvDiVuUuc3Ww5lX8QQpOL6PBCE0nnGRZcoA3oAWe5SUeRXKznkwObWZom11P/AOJWTVUtxXtN+gtXG/Z+Dl2MI2NeBpY4wlHY6jknuaXD3uMjA5xIzt0JJG/etVbk2k31MlyShLC6M3OIzMiIzeyDeoaSNO2tt1tldCp+lyz4HNohO1PH1BhYopgXaPqhY+SfoWvK5jtlbTiOxdZEGgNGw0CtSwsIyyk5PLIsVhukblzOb15mGioWV8axnHsLKrezlnCftKB4bKNpyR1h7AfiFT2Nq2nn2pGpamt7w+DLrmq1xMyZzGJwRfI4tLT7R9nMMw17FzHRxttNfE7MLlGCTT2K0sbozlcCDuqpQcHhl0ZKaygF6Mhg6Vmw8B8l0690ciW7HELQRGkJYJZIpGqi1E0zF4m72/ILlah+mdDTr0CpmVGS/hEDZpNc3geMHSELvNHHQ2lHAy/FzRh3e9nZ4tv921ljq6+vIlPRW9MMtM4rA/3ZWeBOU+hWmF9UtpIxWae6O8WZnFONSxSFkZbloEGidx40s2on6fI36SpOpZ8TS5axr5o3mRwLg+hsNMrer1UtPJvOSGrgotY7jWc1ajBJGXwuODGGUOgDOjIbYcXXebqIoe6sOFJtHVeYJNMWI5Ti1dG4sIBIIsH1B/BQdKzyJK9458zj4uL4lmgmf/eOcf6rVMb7Y7SL56Wme8V9PoXTxyaSMsfkIcKJy0fgaWpamco4ZmWiqhNSjnkaPKrsrnvG4AbXVR1v4K7TxUmyjWzcUkdLhsVmcWnesw7KsD8VdOKTwY4SbjkfOFKJXY+ZA1TwUpgcmkJtjC0HcJ4DLIpMJGd2NP8AdCThF9CcbprZsiHDYQQQwAg2CNNQl2UN8FnnNrWGywrMFORoaBsAPAUkklsS4m9xEJhkbSAyNIQSyV3ydyMFqiZ+M4G2Rxe12UnUirF9qxWaOMnxLka6tdKC4WslYcC09p+vVW1eagtH3suevWeSIZOCvGzmn4KuWkktiyOtg90X8W8xxlwAJaBodupXWTdceJdDLVFTnwvqZjeNnrjHk4j8FQvKD6x+ZsehXSXyJmcYYd2OHoVdHWxfRlb0clsyxHimvBy3pvYVisjZsVSqlDcy+J4dzn5mtJFdVLBqam5ZSNunsio4bM9zCNwR4ghY3Fo0pp7CBog9hBSXJ5HjKwajOMj7TCPum/muhHXr+qJiejfRkw4nF2n0Kt88q7/kyHmthkSwlu4I8RSwWV8KN0Zp7DGKuO42WGBaYFTLGAwxfMABZIcAO/KaTdXFLJGVnDAlbhsbF/SG+HSV8FFV2wfJsi5UT3wdJyOCDNmBs9GTe9+3a01p9TNfJcsHTvbYI7RStwZ+I4TEcqTt2yv8DSodBsWrj1KMnCpo/ejcPJNVNdCXbwfUv8E4fJJ0jWyOhPsHNRO2bSvNShXJ54XgpvtgscUVJczc4Zw6aKTNJOJRlLW+zlIsg/gr4QmnmUsmK22trEI495dxrqrX4rRDBlkmVQTmb3mvgT+CnPYSXJ+wskJIpGpgNkNAnsFobxzHFZeCOCUPbmG22xHzSjJSWUTsg4PDH0pkBEJDGkJjBSBjXBA0zPlwUuYlswomw10YNd1gqjgtT5S+KNkb6sJSh8GWxoFdsjM+bIHnVNFq2AwapSG9iDHQF8bmgakGlnur4otFlFijNNmB/Bcn7PxC5/mc+46nnUO8Zh8KS9rXBwBNE0QlXV6Siyc7Uotpo2IsExnu3/iPyXQjRGDyjnyvlPcfkU3FEeIY6PuWeUBqRSxuHbkJyi63pZrqo8LeDTTZLiSyYdLnYOjkOVS4QyXpsXNI3LI8vG+tE+u60+m1iTyUKEIvMVgY2I70fGtE1BA5dCRjVZFEGzW5bb/GmeZ+CuguZnvfoHe5ldgwthbSMCTEUYFkZIpJCbI5ApIi+YsouwB3mqKEiLGkKaIMq4qBkmkjGvG9OaCPHVDrjJYkslaunB5i2vYV4sBGxwc0OFbDO/JtXuk11pRpinlfV4+A5aico8Mvos/EsFWlICmMBCAEgBqYxFADSgYqQMaQgAEIJIjIQ0SyYPFMXNHKQ33aBFtsba6rn223VzajsdTT1VTrTlv7Q8N4g98jWuDdb2BB2Pep06ic5JSSFqNPGEHKOTWetMkYImN/DDMxaWuBBIvQjQ0s0dbFvDTOl5nLGU0X5TWpodZJ2CtbSeWZI83hAa4HYg+BBVqknsxuLW6EWoaFkaWqvGSWSHEQZmlu1quynii0WVz4ZJlAcHHW8+QpZloF1Zq88fRDxwqPtf6j8lPzOHeyPncvA6l2GidvGw/3Ar+zj3HMV8ujHtwkQGXo2jyR2a7hO6XVkTuFQu+xXnfzQ6ojjqJ95a4DwSJuJa7U6O0P3T2KuyKjHKNFVzslwy2Ou+rRt2a30Cz8Un1NXZxWyGOq/wAlJEXgwOJ41oxAhGYuLcwDQ46WdTW2y0VuK5Mx3Qm/TS5IbJmG+YeNhXJJ7GOTktyIyHrJ9VLhIqbEZCa1QoilNsOZSwQ4mAp4FkCAAUAApjAUABAwIwMBTACBgQMCAGoGBAwFAxhYLuh40FHCJcT2GuCGhogkga7drT4gFJwi90WxslHZkOMgLo3NG5aQPEhVXV8UGvAnVZwzTfec2eGSt3YfIX8lynpZx6HYWprl1LGCL2yNBzgWAQcwCuplJTSeSq1RcG1g2yulE5oCEwTGEJEgUkM6UFQwZckch1U4lNm4g5PBHJf4ID07fB37pVOo9Q06P+Ve86NxWJHVbK8g1ViKmcbxnGug4m1zYzKTBkDA4NOrnGwT91KXFxLCySXD2T4njmSfX3zSgmGWINjIIfRaSXNqiDR61oo4uLmmjn6vgcFwyT5kzlqMCEBohA9xwUiIkAJAAKBgTASBjSgYkABMAUkMBTGNSGCkxiKAGlAwFIYxyRJDaQMYUEkMcoskiIqtk0Nvq804bkscgEKYhpCRIbSQzpwoGczsbj443lrnAHTSwjjit2LzeyfOKFhMayW8hut/NTjNS2K7aZV44i2yVw1BIPaDRRKKe5XGTjszBx3GOJxyvySy5Mxy2xsgrzBXMtqsU247HeotqlWuJrOOfMEfOuNbo9sL+3MxzD8CPkq+O2PQt7KuWzI4+KOxWNjlcwMIbkppJGgeb18Vopk5TTZm1MFCiST/AHKOltdLBwBpKY0FqSExyYhIASYAKBgQMSAAUwAgYkABAAKBgQMCBgKYDSEhgKBjCkSGFAxpSJIjcoskiMqtk0Z/EcYYiCGh12DZrZZrr3S00smuilWppshZxlvWwjwIP5KMdfF7xLHon0ZMOJxHrI8Wn8FctVWyt6WxD/rkX7bfVT7aHeLsLO46WDGRv9yRjvuuaVGNkJeq0Yp1zj6ya9xmQ4SObGTdI0PDWx0DeljuVTipWPJqVkoUQcXu2aRwkcQ/Rsay98o38VorilsY75yljieQBXGYcEYEBzAdwD4gFHCmNSa2YsNwoOcHRw24bFjCT8FFxrjzeEWqy6a4U2/ma8HLuMf7uGm8XMLB6upVy1VEd5r45+g46S+W0H8MfUlxvKuMhhdPLGGMbRdb2E6kAaAnrIVcdfROShGWW/Blr0F8YuclhLxMVp0WtGJocmISAEmAEAJAxIABTGBACQAEAAoGBAwIACBgQACkSGOCTGhhCCQ0hA0MISaJDC1RcSWTF5gZ7nn+C52shlo6Oie5kZVh4GjfkVqWcAKwnxIXM7uXlnCu/m8v3XOHw2W6VFb3Ryo6q1f1FjhXCGYcuLHOdmyg5yCRluq9VKFUYbELbpWJKXQrcx8RMHR03Nmzbmtsv5qU7ez6Cq0yuzl7HUfRdw2HiLJn4hrv0bmNaGPIGodd+gWPV66ytR4MLOfHuNNHk+pzall4x9z0bD8pYBm2Hafvue/94rmy1+ol/V9Ebo6DTx2j9yvzFw6CKBnRwxR/xjDglkbGmjM2xYClp7rJzfFJvlLr4MV1NcYejFLmunijpQK208Fiz1NgaT4vADB58/k2fwZ/usWnRY7eHtM+r/gn7GeOtK9YjyTNJvB5ThTixlMYdkd7XtA2BqPMeqpeogrexfrFy003V2q2KAWjBnNLinA58NHHJK0BsotlEE7A07sNELPTqq7ZSjB80abtLZVFSmuTKmAwb55WxRi3POVoJoeZVtlka4OctkVVVuyahHdmo3lbEEYg3F/Fhc3t/wBTOQ3TqHbSy/8AIU+hv6W3Lxwav+Pu9Lb0fHwzyMNbTEApgBAxUgDX4lwMw4WDEmQO6a6ZlIy133qstWqVl0qser1NVmlcKY253MYrUZQIGJAwIABQMBQMaQosaNbgPLOIxjv0bcrPtSvsRjz6z3BZtTq6tOvSfPu6mnT6ay5+iuXf0KWD4VLNP0ETc77LdNBoaJJOwVk7oQr7STwiMapSnwR5s13cmPcXxw4vBzzMBMmGjmBlFbiu3xpYV5Uqb5xaXebX5PsS5NN9xy8jCCQQQQaIIogjcELo8nzRh25FTF4VslZhttqVXZVGe5dVdKvYoScHZ1FwWeWkj0ZqjrJdUVJeDnqePMLNPSPoy+Osj1RD/Bcna31P5KnzWfgWedVnS8L4jFg2dFO82SXhwa5wo0Neu9FoclTyl1MjjLUelBeBswcYwr/dnj8HODT6OpTjdB9SqVFi3izA52cC+GiD7Lzob3LfyUL3nHv+xo0iwpe77no30Dt/i+IPa5n/AD/Jc7X+rD3/AGNen/ln/wDn7nqa5psMbm39RH/acN/utWnSeu/+svozPqfU96+qNxZjQEIAweff5Nn8Gf7rFq0X/sQ9pn1f8E/YzxsFeuR5N7naciO6eHFYE/zkfSR31OGl+uQ+S5PlJdnOu9dHh/vxOr5NanCdL6rP2/BzvBMEZ8TFDR9p4Dh1gX7XoAV0b7VXVKfcv9HNoq7S2Nfe/wDZ3XNOIbjcJi2sAvCTjLR+y1oY/wBCZf8AAFwdCpUXVye00/r/AKO9ruG6mcVvBr6f7MP6OMMDinTv0bDG6QuOwJFfIu9F0fK1nDTwLq/37HO8lV8V3F3L6/rMzBcPfjo8ZinSGPIHYmSP2jnzF8mQ0QKFVrYUpyr06qrlHOeXs2/I4Ky+Vs4Sx91z/BLwXliTFYZ88bxbXiPoyN7y24uvQAOJPc0qzUa6FFihJbrOfj09xTp9FK+tzi+aeMfAsYHlrC4kmPDcSgmmokMDHCN1DXI8n2h3ttZ35TlHnKtqPf8AqNK8lp8o2Jy7v1mDFw6V0/1cMPSZjHk6w4GiPKjquk7YKvtG/RxnJzVVNz7NL0tsG9ieWMNC7op+J4SKahmiJ0aSNA91+z5gLmryrnnGttd/7+Tpf8U0vSsSfcaHOmDfDw3CRPrMxz2mjY6yCD2Uq9BZGzV2Tjs1+CetrdekhGW6f5MfD8tMZC2fG4qPBsk/VNc0yTPG9tYNaqj179S03eUVGbrqi5Nb4/WUU+T3KHHZJRQMbyy0wOxOCxLMXGz9aA0xys67cw67a61pqinyipTVdsXFvYd2gcYcdclJFfifAeiwcOLbJ0jZTlc3JlyOomrs3s7s2V1Oq47pUtYcfmU26bgqjanlP5E/CuVX4jBy4sPy9GHFseQkvyNzGjenooX66NV0amt8c87ZJUaOVtTtT2zy78FXlrgJxr3tMgiaxhkfIW5gAO6x3+is1mqWninjOXjBHS6Z3ycc4wXMPy5BHhW4vG4k4eOQ1ExkTpZXXqPZbZ2BNAHRZrfKElZ2VUOJrc0U6FOHaWSwnsY3F4MPHI36tiBiWFofmyGNzTmIyPadQdAda3C06e6dsG5x4XnBRqKY1SSjLKxk6/knmDFYrHMbNIMjY3BkMTejiFCrqyXGu0nupcnXaGuihyXN53OnpNZO63hxhYGcst6KHiOIbo9glax3W0+2QfWvRWaz/wAjorezxn5ENL6Pa2dVn7nG8CnMOJhkboWvaR4E0R5gkea6moqjOmUcdDBRY42qWepqfSLgxFxCTKKEgZLXe4U71LSfNZfJk3LTrPTkaNdDhueOvM5YreZSNxUWTRG5VyRJEdKskc9i8S6V2Z9WBQrsXOnN2c2daquNaxEcOHSFocGEgiwRqmqG1lIT1EE8N8xohLdwR4iklBofGmeufRFwcYjDyXPiocpaR9WxD4M2Yye9l97bTxKhrLOCEPRTzndFNEOO6zm1tt7D0AcpM/p3FP8APzLB5yv/AK4/D/Jr7F/3v5fgzuP8tMjjjd9b4hJc8DKlxkr2jPK1uYA/aF2D1FaNNqcyfoR2fTwfiU30vh9d7ru714GuOVWf03if+elWbzlf2R+D/Jf2T/vfy/ARys3+m8S/z0qPOF/ZH4P8h2T/ALn8vwYvOvAhDgJZBicdJRi9iXFySRm5WN9pp33vyWnRWqV8VwL3Z/Jn1kGqJPie3h+DzRuy9MtjzT3NnlLH/V8bDJdDNkf2ZX+yb8LvyWbW1drRKPhn4GjRW9nfGXu+J2GB4c3CcRxmJeP0cEb8Q3/uNLtPISDyXJu1Ds0dcFu3j4fqOrTp+DWTm9ks/H9Zi/R7is2JkgmNjExvbJ3vNuJ+L/Va/KNPBRGUd4Nfv0Mugu475qW08/vwyWYYHYPhGKLtJJpfqg6rAdkfXgOlPkqr5rU6qqK2Sz8ef4LNPB6fTWSe+Wvhy+uSDk//AKLiX9md+5KrfKX8tP8A2+6KvJ38dvs+zH8JcRwLGV1vaw97XmJrh4EEjzUdXFS11afd92S0UnHR2Nb5f0RjcouIx8FafpGj10+RW7XLOnn7DFonjUQ9p2XBGN/hzFmhbWuc0d56O/mfVce+T/4+teP5OtTFefz9n4PNi9ziXONucS+QncucbcT3kkr0FUFCCjHZHDtsdk3KR2/G9eFYDPtnym/2QHAfABcfTrh1l3D3P7HWvfFpKuLvX3Kf0ngjHN7BAwRjqDcz9vO/Qdit8jpdi5dc/ZFflaT7VR6YH/RcCcY9u7XROEg6iLbV+p9Sjywl2Kl1T5fMXkpvtXHpj8DuDViOGYvCA5jCfrEB3Ja02a8gf8Sjd/49VVd/dyf7+7Eq/T01lX9vNfv7ua2Fx4wc2AwR0DoicQ3qLsQaZfgWn1WOyp6hXX9z5e7f5GuuzzfsqX1XP2v/ACUDhDgOH469HPl+qR2aJZdE/wCBzj5LROzzrUUrw4n7d/sU11+b02y8cL2frM7h3HMLiMMzBY8PYGH9BiY9cnUA8b1rvRFb1Vq2/T3U3O+hZzuiui6m6pU3PGNmZHM/AX4KUNLxIx4zwyt0Dm946jt6ha9Jqo6iLaWGt0ZtRpnRLDeU9maP0an/ANQZ914/0qjyqv8A4z9qLvJv8/uZq8ut6RvE8MPecJSwdpuQfOvVZNV6L09j25fY06f0ldBb8/ucTwiAyYiNrRZL2j4hdm+SjXJvuZzKlmyKXejc+k6YO4gWg3kjjY7xov8Ak8Ln+SU1p897Zu8ovN2PA49y6DMaKD8dEHFpeAQaINj47LOtRWnwt8zUqLGlJLkTRuDhbSCO0EFW5UtmQlFx3QKUOERy4XJR2mdhwn9Qz7q61H8aODqv5Ze0tloO4B8QrsGdNrY9F+iRoDcQAKFxaD/uLh+WFjg9/wBjs+S23xt+H3PQwuKdYx+a/wBTF/asN/vNWnS+u/8ArL6Mo1Hqr2x+qNtZi8KAOc+kP+TJvGH/AH41s0H/ALMPaZdb/BP2HjoOi9atjyz3CCmI7nmHnDDz8P6FjnfWJGwsxH6KUANYcz7kLcpBojQ/bXn6NDZHVc16Kba+32O9drIS0zaa4msePicnwrGmCeOYfYe1+nYDqPSwu5dX2lcod6OJTPs7Iz7mdDz1zNh8YIosKXOYx0kspdDND+kdo2s7RejpSa7QuT5M0tlc3OxY5YR1vKeohKtRg0+eeRR5f4zDh8NjI5M+aeF0UWVhcMxZIBmI90W4alatdTOydbis4fP5GXQ2whCxSeMrl8x2B41DHw3EYV2fpJXsdHTCWUHMJt2w90paiiyWrrsS5Lf5j01sI6WyDfN7fIzeB4xsOJilfeVj2vdQs0DZoda16mDnTKMd2mZdNJQujKWyZqu5mEfFH42AOcxzvccMjnMLQ1wIOx008AscNG56NUz5P75Zsnqow1btjzX+C1jJuByPM/TYuPMczsM3DSk5jqWtdlLQL/rEDtVFd2uguz4MtdS6en0dku048J88fvMj5n5mgxeDhhjjdE+OQnosrsjYwHNYM+znZSy667U9DpbqtRKVnVb+PJkdZfVZRGMOj28FlBHMGDxUDIuItmY+IZY8VA3pCW6aPbqb8jtdi6RKjUaaxy06zF9AjdRqa1G54kuoHcyYXCQPh4ayd0koyvxc7RHlbr7jdy7ssAC7JNUovTajVTTvWIroSV2n0sGqnmT6mXypxpuCxAlcxz2ZXRyMZlzFpGgAcQNwNytuv07vp4Y77ox6K9VW8UtnyZHx7jBxOLfiWhzAS3omuy5mtYAG3RIvS9zuno9P2VCrlvzz7w1d/aXccXtt7v8AJp84c2Nx0cUbIpI8hMkvSdHTn5Q0FmVx0Ht71uFk8n6GdFkpT9i9n7g067VwurjGHtZDheI8KLGdPhMW17QA52HdE6OSushzgQT4DxUrFroTfBhpvlnoKtaOcFx5Txz8SrzZzEcdI0tj6GONuSGMkF9GrLq0BNAULqtyrNBpJURbm+b3Ia3UxuklHZEPLHF24PEtncx0gaHDKwtDjYr7RAVmuoldS4R35ENHbGq1TlsNwfHpIMY7Fwii573Fj9i17iSx1eWo6xaLNKraFVLdJfFIcNR2d7sjs2/gzXi5rwUUhxEPDntnNkZ5m/V2uduW1r1n7I8lhlpNZOHZTmuH5mxX6WEu0jF8X77jlMbiXzSOlkdme9xe921k9g6h3Lq1VRqgoR2Rz7LHZJyfUrOUmJFGXCROcSWNJ6+9Z+yrk8tLJqjdZGKSbwPhw7WXlFWbI6tq0UowjHOCE7JTxnoOJCkI5YBcZI7WTruF/qWfdC61H8aOFqf5Ze0tgq0zlvBcSngJME0sN+90by0GtrGx3O/aqrtPXdjjWcF1OosqzwPc1sNzrxJn/ujJ3SxQOH+loPxWSXkmh7ZXvNcfKdy3SZYxPPOMma1szcM4NljmBjjkjcejcHAG3uGpHYoQ8lRhLMZdGvisEp+U+KOHHqnv3PPcbuG+lA/zuCr/AOrEB/wcxvzWOXka1erJP4o1R8qVPdNGlhvpLwTvfixUX3o43j/83uPwVEvJepj0z7GXR1+nf9X1KvNvN2BxXD5YoZiXu6PKx0U0bjUrCaztF6AlT0mlur1EXKLXMjqb6p0SUZJ8u882BXp1sece45BEKBCTAKBAQMKBCKBiQISBgQAEABAxIASAAgAIGNKCSAkMBQAEDGlAxjkiSKGL4dHI7M4G6qwaWa3TVzfE1zNVWpsrXCthwDY2tbZq8oJ1Nk6WksVpL3CbdknL3jqVxEH8DwnWiPBUebwfQfnliL8MTWNDRdAULV0Y8KwjLObnLLE2QE0CL6xeqkmm8A4tLLQ9SIhCaAITEFAgoAFpgFuyS2B7jrTIhQAkCCgBIAKABaAEgBJgJAAQAEDEgBIGBAASAaUEkAoGJADUDGlIY1yRJEZCTRJFHitiIuG7S1w8nArHqU1DiXTD+Zq0uHYk+uV8jJ/hiX9lno781l88t7l++83eaV97/fcdQJABqQPEgLotpLmcXhbfJDmvB2IPgQVJST2ZHha3MTgv/US+L/31j0/80vf9Tpaz+GHu+hurecwITEFMAoEFAgIATTohDe48JkQoEJABQAkAJAhIASAEmAkAJAwIGJAAQAEAIoGNKQ0BAwEoAY5yWSSQwlBLAggBpKQxkjA4UQCDuCoSSawyUZOLyir9Qi/+Nvoquwr7i/zi3+4lxmH6SMsurrXfYg/giyvji4kKrOzmpGUeXz1Pb6ELH5h3M2/8guqL3CeHPieS4tNitL7bWijTyrllmfVaiNsUkaoWswhtMQUxBtABQISAA3ZCG9x6ZEKBBQISAEgApgJIQkxiQAkABAAQMSAEgAIARQMaUhoBQMaUmBXlxDGnK57Wk6gOcAfiqnbCLxJpMujVOSzFNjmuB2IPgQVYpJ7MTi1uGk2IqF8w3ja4drJBfo4D5rPxWreKfsf5NHDU9pY9q/BONhpWmx3HcrehU+TGoGTCNIrcgBAx7QpEWBjwRYN7j0NH5IjJPmglFrkx4KkRCgBIEDOEZHwiZIHbEGjRo3R7CkpJ7BKLjuhzTomthPccmIdaBBQISAEgAhMQUABABQAEAJAwIASAAgBIAaXJkkgWkPAkgAgDN4nwoTODsxaQMu1je1lv0qteWzbp9W6Y8OMma7l5w917T5ELK/J7WzNa8oxe6Zp8MgfGwtebOaxqXaUO3zWzT1yhDEjHqbIWSTiWHFWopSGhAxJATgqJXgxxxlpcGhrjZy3p20s3nSzhI6HmUlHLZpSGT7DmAdYc1x+IIWiSn/S/kZI9n/Un7n/gOGjLW0SCbcTW3tOJ/FOuLisPxFbJSlleH0JgrSoKBCtAFWfpg62Nje3qBcWv79dlTPtU/Rw18zRDsXHEm0/ihcLic2P2hTnOc9wsGrcezupFEHGPpbtthqZxlP0dkkvkW27K5Gd7jkyI5AgoEFACQAgmBG+ejlp12PsOy9/tVWyg588fZlka+WeXxRKplYkAJAAQAkwASEh4YUCAgCGUPv2QwjvcWn5FQfGtkv34l0eDHNv4Z+6FGXfabXmCEJye6FJR6MepEQWEBgCBgKBjCgZTxODLnZmyyMNVTT7Pos1lHFLiUmn4Gmq9RjwuKf1Fh45Gk55A8dXshp86RCM4+tLIWTrkvRjj3lyPCSOFhtg7e0381GWpri8OSyONE5LKQ1pVpnOPw/61v3x+8uPH1/ed+f8AG/Z9jsAV2jgBCBMIUhEjSOojvS4ltkTTRXwchcwOO5v9418FGqTlHL8fqWXRUZtLw+hOrCoSAE3ZCB7jwmRBJJWUftHL8CfwSlLGPEcY5T8B6ZEKYCQAUCFaAEgBIASYCSACYFdz5Nujvqtr2n50qeKfWPz/ANGhRr3Uvk/tksq0zgQMSAGlIY0oGQt6S9Wt8WvJ+bQoJzzzS+P+C1qHRv4f5JSplZNhoQ67JFdm6hOTWxOKyTHCM7XfD8lX2jLOBDfqTO13w/JJ2MfAipNAACQTQ2vrRxPYOE53HzOEhAcRt19wXPvskrGkzfTCLgm0ZkeKnGofJ6uIWWM7FzTZslVU+Tii5wXBiRxc4kZS0iq1Nk6+i06arjk2+mDPq7uCOF1ydIF1DkEOLxTIgC8kWaFAnvUbLY1rMiyqqVjxEnBVqKmiKTBxONmNpP7VU71ChKmEubiiyN9kVhSeCWKMNAa0UBoApxiorCK5ycnl7j0yIkAFuyFsD3E9pIIDi09TgASPIoksrCeAi0nlrJAIJMzS6QODTmrow1x0I3B7+xVKuWVmWceBa7K+FqMcN+JbV5nCgQUAJADZJA0EkhoG5JoDzSlJRWW8IcYuTwkRCcEtyuDrNaEHqJ/BQ7SLxwss7NrPEuhYVhSJMAJAJAxIASAEgAFAAQMakMSAAgAxyZTfqlJZRNPA3iWFc6nMlezT7OUg+IIWdwcnyk0aIWKK5xTJ8NC+OMMc7O52pdVUOykop9XkcnH+lYIMa/XKNh81ZFdStvoY2JwZc8uFa129lLLZp3KTZqrvUYpMOBgyRhpo1fhuSnTXwR4WK6fHNyRchAGwA8Ar44Rnm29yZTKzK5g1EY7X/wDj8Vj1m0V4m/Q8nJ+BrraYAhSIj2hPImxspqu81/pJ/BRcuaX7sOKyn+9wlIQWoWwPccExDggQbQISAIcPKXPkB2a4NHmxrj81GMm5SXd+CyyCUYtdV92ixamVALhtpr1dqMrYaT3Ixhow7MGMDhs4NAPqo8Ec5xzJdrNrhbeCVTICtAhrnaJN4WSSXMNoEJABQAEAC0DEkA0oGJADXixV13ir+KTWUSTwxjGkDUl3eQB8kkmt3kk2nssFrDPsZD4tUZrHMlHuHTS5RmO50Cr64JmY4qwSRGSokyJpVSZJoe9gc0tOxBBrfVSkuJYYRk4tNFVvCSPcnkb5krP5rj1ZNFz1ifrQTIRgpZCxxlEjWusWC06EX1dygqZ2YlxZRY7q601w4bRtLoHNHBMAEu+yWjtsE/IhJp9ASj1AcxIsNoEmwTexG1d/aliWVkfoJPGR6sID27JLYUtyucSenEVCiwvvr0NUodo+04PDJaql2Ts8cFoK0oCgCj0OJb7szH90kdfFqz9nctp59q/Bq46Jbwa9j/JLgYntzmTLmc7N7BJFZWtG/gp1RksuW7fQrulB8KhnCXX2tlpXFBDJ+sZ4P+QVcvXj7yyPqS9xOrCoSAA66036r2vqSeeg1jPMquM/7MR/vvb/AMSqn23h81+S9dh3v4L8loK1bFD3CmIa/N9kgeIJ+RCjLPT9+hKPD1Ay/tVfddIjnqOWOgJn5Wl2+UF1eAtKcuGLfcOEeKSj3mQ3mSLrZIPJp/FYl5Qh1i/kbn5Ns6NfP8FnCcXileGNzWboFtbAq2vVQskorJVZo7K4uUsYL61GQaUDAUDGh1GwkyaK/EcWWsL3a5a0GnWFntkq48RfTF2T4TNHG4jvnb4i/ks611b3yaHorFthkg4jEdc3+l35KfnVXf8AUi9Naun0P//Z",
    body: "thi is great"
});

//index route

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { blogs: blogs });
        }
    })
});

//index route

app.get("/blogs", function(req, res){
	Blog.find({},function(err, blogs){
		if (err) {
			console.log(err);
		}	else {
			res.render("index", {blogs:blogs});

		}
	});

});

app.get("/", function(req, res){
	res.redirect("/blogs");
});

//new route

app.get("/blogs/new", function(req, res){
	res.render("new");
});

//create route

app.post("/blogs", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	var formData = req.body.blog;
	Blog.create(formData, function(err, newBlog){
		if (err) {
			res.redirect("/blogs/new");
		}	else{
			res.redirect("/")
		}
	});
});

//show route

app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});
})

//edit route

app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log(err);
        } else {
            res.render("edit", { blog: foundBlog });
        }
    });
});

//update route


app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//delete route

app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    })
});

// server 

app.listen(port, hostname, function(){
	console.log("Server has Started");
});