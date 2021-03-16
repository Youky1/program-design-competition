import sys
from PyQt5.QtCore import *
from PyQt5.QtWebChannel import QWebChannel
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtCore import QUrl
from PyQt5.QtWebEngineWidgets import QWebEngineView


# class myClass(QObject):
#     @pyqtSlot()
#     def testPy2JS(self):
#         myWeb.page().runJavaScript('wmsg =' + info + ';')

#     @pyqtSlot()
#     def onTimeData(self):
#         myWeb.page().runJavaScript('wmsg2 =' + Info2 + ';')


# 程序入口
if __name__ == "__main__":
    # testWeb = myClass()  # 用于通信的实例化对象
    # myChannel.registerObject('testObject', testWeb)  # 注册

    myChannel = QWebChannel()
    app = QApplication(sys.argv)
    myWeb = QWebEngineView()
    myWeb.page().setWebChannel(myChannel)
    myWeb.load(QUrl(QFileInfo('./website/index.html').absoluteFilePath()))
    myWeb.setWindowTitle('面向海事安全的船舶轨迹数据可视化分析系统')
    myWeb.showMaximized()
    myWeb.show()
    sys.exit(app.exec_())
    #sys.exit(0)



