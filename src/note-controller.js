(function(exports) {
  function Controller(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
  }

  Controller.prototype.changeText = function(text) {
    let element = document.getElementById("app");
    element.innerHTML = text;
  }

  Controller.prototype.addNote = function(text) {
    this.noteListModel.addNote(text)
  }

  Controller.prototype.displayNotes = function() {
    var noteListView = new NoteListView(this.noteListModel)
    this.changeText(noteListView.displayNotes())
  }

  Controller.prototype.showNoteOnLinkClick = function() {
    var model = this.noteListModel
    window.onhashchange = function() {
      var noteID = location.hash.split("#notes/")[1]
      var longText = model.list[noteID].text
      document
        .getElementById("app")
        .innerHTML = longText
    }
  }

  Controller.prototype.createSubmitEvent = function() {
    document.getElementById("text").addEventListener("submit", function(event){
      event.preventDefault()
      console.log(event)
    })
  }

  exports.Controller = Controller
})(this)









