import multiprocessing 
from backend.flaskr import create_app
from backend.watch_and_run import watch_and_run

def run_flask():
    app = create_app()
    app.run()
    app.run(debug=True)

def run_watch_and_run():
    watch_and_run()


if __name__ == "__main__":
    flask_process = multiprocessing.Process(target=run_flask)
    watch_process = multiprocessing.Process(target=run_watch_and_run)

    flask_process.start()
    #watch_process.start()

    flask_process.join()
    #watch_process.join()