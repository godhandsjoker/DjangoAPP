# 一个伟大的史诗级巨著

## 项目启动

```python
python3 manage.py runserver 0.0.0.0:8000
```

```
uwsgi --ini scripts/uwsgi.ini
```

```
https://app1329.acapp.acwing.com.cn
```

```
ps aux | grep uwsgi
```

```
sudo pkill -f uwsgi -9
```

```
sudo service uwsgi restart
```

# 对数据表操作之后要执行几个操作

```
python3 manage.py makemigrations
```

```
python3 manage.py migrate
```