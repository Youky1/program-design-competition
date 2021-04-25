import sys
from PyQt5.QtCore import *
from PyQt5.QtWebChannel import QWebChannel
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtCore import QUrl
from PyQt5.QtWebEngineWidgets import QWebEngineView


# 程序入口
if __name__ == "__main__":
    myChannel = QWebChannel()
    app = QApplication(sys.argv)
    myWeb = QWebEngineView()
    myWeb.page().setWebChannel(myChannel)
    myWeb.load(QUrl(QFileInfo('./website/pages/index.html').absoluteFilePath()))
    myWeb.setWindowTitle('ENRS-智慧船舶航行风险提示系统')
    myWeb.showMaximized()
    myWeb.show()
    sys.exit(app.exec_())