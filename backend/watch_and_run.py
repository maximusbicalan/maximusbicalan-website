import os 
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class ReactBuildHandler(FileSystemEventHandler):
    def __init__(self, react_src_path, reat_build_path):
        self.react_src_path = react_src_path
        self.react_build_path = reat_build_path

    def on_any_event(self, event):
        if event.is_directory:
            return 
        if event.src_path.endswith(('.js', '.jsx', '.ts', '.tsx', '.css', '.html')):
            print(f"Changes detected in: {event.src_path}. Rebuilding React...")
            self.build_react()
        
    def build_react(self):
        try:
            subprocess.run(['npm', 'run', 'build'], cwd=self.react_src_path, check=True, shell=True)
            print("React build completed successfully.")
        except subprocess.CalledProcessError as e:
            print(f"Error during React build: {e}")

def watch_and_run():
    current_dir = os.path.dirname(__file__)  # backend directory
    project_dir = os.path.abspath(os.path.join(current_dir, ".."))  # Navigate to resume-webapp
    print(f"======> Project directory: {project_dir}")
    react_src_path = os.path.join(project_dir, "frontend")
    react_build_path = os.path.join(react_src_path, "dist")

    event_handler = ReactBuildHandler(react_src_path, react_build_path)
    observer = Observer()
    observer.schedule(event_handler, path=os.path.join(react_src_path, "src"), recursive=True)

    print(f"Watching for changes in {os.path.join(react_src_path, 'src')}...")
    observer.start()

    try:
        while True:
            pass  # Keep the script running
    except KeyboardInterrupt:
        observer.stop()

    observer.join()

if __name__ == "__main__":
    watch_and_run()