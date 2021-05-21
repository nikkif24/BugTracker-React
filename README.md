# BugTracker-React
Everything works in development -  mailtrap and psql database connected and running correctly -  but once deployed to heroku for production I keep recieving errors:

2021-05-21T18:41:44.666241+00:00 app[web.1]:     self.stop()
2021-05-21T18:41:44.666242+00:00 app[web.1]:   File "/app/.heroku/python/lib/python3.9/site-packages/gunicorn/arbiter.py", line 393, in stop
2021-05-21T18:41:44.666514+00:00 app[web.1]:     time.sleep(0.1)
2021-05-21T18:41:44.666543+00:00 app[web.1]:   File "/app/.heroku/python/lib/python3.9/site-packages/gunicorn/arbiter.py", line 242, in handle_chld
2021-05-21T18:41:44.666767+00:00 app[web.1]:     self.reap_workers()
2021-05-21T18:41:44.666768+00:00 app[web.1]:   File "/app/.heroku/python/lib/python3.9/site-packages/gunicorn/arbiter.py", line 525, in reap_workers
2021-05-21T18:41:44.667110+00:00 app[web.1]:     raise HaltServer(reason, self.WORKER_BOOT_ERROR)
2021-05-21T18:41:44.667114+00:00 app[web.1]: gunicorn.errors.HaltServer: <HaltServer 'Worker failed to boot.' 3>
2021-05-21T18:41:44.793651+00:00 heroku[web.1]: Process exited with status 1
2021-05-21T18:41:44.885226+00:00 heroku[web.1]: State changed from up to crashed
