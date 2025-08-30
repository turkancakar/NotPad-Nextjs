"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Plus, 
  Search, 
  Folder, 
  Archive, 
  Trash2, 
  Edit3,
  Pin,
  Filter,
  Grid3X3,
  List,
  Settings,
  Bell,
  Menu,
  Notebook
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";
import { ThemeSwitcher } from "@/components/theme-switcher";

import { DashboardBreadcrumb } from "@/components/dashboard-breadcrumb";


interface Note {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  isArchived: boolean;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Folder {
  id: string;
  name: string;
  description?: string;
  color: string;
  notes: Note[];
}

export function DashboardClient() {
  const { currentTheme } = useTheme();
  const [notes, setNotes] = useState<Note[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"notes" | "folders" | "archived">("notes");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data - gerçek uygulamada API'den gelecek
  useEffect(() => {
    const mockNotes: Note[] = [
      {
        id: "1",
        title: "Alışveriş Listesi",
        content: "Süt, ekmek, yumurta, elma, muz, domates, salatalık",
        isPinned: true,
        isArchived: false,
        color: "#fef3c7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "Proje Fikirleri",
        content: "1. Not defteri uygulaması\n2. E-ticaret sitesi\n3. Blog platformu\n4. Mobil uygulama",
        isPinned: false,
        isArchived: false,
        color: "#dbeafe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        title: "Toplantı Notları",
        content: "Pazartesi 14:00 - Proje planlaması\nSalı 10:00 - Müşteri görüşmesi\nÇarşamba 16:00 - Ekip toplantısı",
        isPinned: true,
        isArchived: false,
        color: "#fce7f3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const mockFolders: Folder[] = [
      {
        id: "1",
        name: "İş Notları",
        description: "İş ile ilgili notlar",
        color: "#3b82f6",
        notes: [],
      },
      {
        id: "2",
        name: "Kişisel",
        description: "Kişisel notlar",
        color: "#10b981",
        notes: [],
      },
      {
        id: "3",
        name: "Projeler",
        description: "Proje notları",
        color: "#f59e0b",
        notes: [],
      },
    ];

    setNotes(mockNotes);
    setFolders(mockFolders);
  }, []);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pinnedNotes = filteredNotes.filter(note => note.isPinned);
  const unpinnedNotes = filteredNotes.filter(note => !note.isPinned);
  const archivedNotes = notes.filter(note => note.isArchived);

  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Yeni Not",
      content: "",
      isPinned: false,
      isArchived: false,
      color: "#ffffff",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  const handleSaveNote = (noteId: string, title: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === noteId 
        ? { ...note, title, content, updatedAt: new Date() }
        : note
    ));
    setIsEditing(false);
  };

  const handleDeleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
    }
  };

  const handlePinNote = (noteId: string) => {
    setNotes(notes.map(note => 
      note.id === noteId 
        ? { ...note, isPinned: !note.isPinned }
        : note
    ));
  };

  const handleArchiveNote = (noteId: string) => {
    setNotes(notes.map(note => 
      note.id === noteId 
        ? { ...note, isArchived: !note.isArchived }
        : note
    ));
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.colors.background}`}>
                    {/* Header */}
       <header className={`${currentTheme.colors.surface} border-b ${currentTheme.colors.border} sticky top-0 z-40`}>
         <div className="flex items-center justify-between p-4">
           <div className="flex items-center space-x-4">
             <Button
               variant="ghost"
               size="sm"
               onClick={() => setSidebarOpen(!sidebarOpen)}
               className="lg:hidden"
             >
               <Menu className="h-5 w-5" />
             </Button>
             
             <div className="flex items-center space-x-3">
               <div className="relative">
                 <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} rounded-lg blur opacity-75`}></div>
                 <div className={`relative ${currentTheme.colors.surface} rounded-lg p-2`}>
                   <Notebook className={`h-6 w-6 ${currentTheme.colors.primary}`} />
                 </div>
               </div>
               <h1 className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} bg-clip-text text-transparent`}>
                 NotDefteri
               </h1>
             </div>
           </div>

          <div className="flex items-center space-x-4">
                         <div className="relative hidden md:block">
               <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${currentTheme.colors.textSecondary} h-4 w-4`} />
               <Input
                 placeholder="Notlarda ara..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className={`pl-10 w-64 ${currentTheme.colors.surface.replace('backdrop-blur-xl', 'backdrop-blur-sm').replace('bg-white/80', 'bg-white/50').replace('bg-gray-800/80', 'bg-gray-800/50')} ${currentTheme.colors.border}`}
               />
             </div>
            
                         <div className="flex items-center space-x-2">
               <ThemeSwitcher />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
                className="hidden sm:flex"
              >
                {viewMode === "list" ? <Grid3X3 className="h-4 w-4" /> : <List className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex"
              >
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex"
              >
                <Bell className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              onClick={handleCreateNote}
              className={`bg-gradient-to-r ${currentTheme.colors.button.primary} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <Plus className="mr-2 h-4 w-4" />
              Yeni Not
            </Button>
            
            <UserButton />
          </div>
                 </div>
       </header>

       {/* Breadcrumb */}
       <div className={`${currentTheme.colors.surface} border-b ${currentTheme.colors.border} px-4 py-2`}>
         <DashboardBreadcrumb />
       </div>

       <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className={cn(
          `${currentTheme.colors.surface} border-r ${currentTheme.colors.border} transition-all duration-300`,
          sidebarOpen ? "w-64" : "w-0 lg:w-64",
          "lg:block",
          sidebarOpen ? "block" : "hidden"
        )}>
          <div className="p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("notes")}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300",
                  activeTab === "notes" 
                    ? `bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} text-white shadow-lg` 
                    : `hover:bg-gray-100 ${currentTheme.colors.textSecondary}`
                )}
              >
                <Notebook className="h-5 w-5" />
                <span className="font-medium">Tüm Notlar</span>
                <span className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
                  {notes.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab("folders")}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300",
                  activeTab === "folders" 
                    ? `bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} text-white shadow-lg` 
                    : `hover:bg-gray-100 ${currentTheme.colors.textSecondary}`
                )}
              >
                <Folder className="h-5 w-5" />
                <span className="font-medium">Klasörler</span>
                <span className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
                  {folders.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab("archived")}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300",
                  activeTab === "archived" 
                    ? `bg-gradient-to-r ${currentTheme.colors.gradient.from} ${currentTheme.colors.gradient.to} text-white shadow-lg` 
                    : `hover:bg-gray-100 ${currentTheme.colors.textSecondary}`
                )}
              >
                <Archive className="h-5 w-5" />
                <span className="font-medium">Arşiv</span>
                <span className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">
                  {archivedNotes.length}
                </span>
              </button>
            </nav>

            {activeTab === "folders" && (
              <div className="mt-8">
                <h3 className={`font-semibold ${currentTheme.colors.text} mb-4`}>Klasörler</h3>
                <div className="space-y-2">
                  {folders.map(folder => (
                    <div
                      key={folder.id}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors ${currentTheme.colors.text}`}
                    >
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: folder.color }}
                      />
                      <span className="text-sm font-medium">{folder.name}</span>
                      <span className="ml-auto text-xs text-gray-500">
                        {folder.notes.length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Notes List */}
          <div className={`w-80 ${currentTheme.colors.surface.replace('backdrop-blur-xl', 'backdrop-blur-sm').replace('bg-white/80', 'bg-white/50').replace('bg-gray-800/80', 'bg-gray-800/50')} border-r ${currentTheme.colors.border}`}>
            <div className="p-6">
              <div className="space-y-4">
                {activeTab === "notes" && (
                  <>
                    {pinnedNotes.length > 0 && (
                      <div className="mb-6">
                                                 <h3 className={`text-xs font-semibold ${currentTheme.colors.textSecondary} uppercase tracking-wide mb-3 flex items-center`}>
                           <Pin className="h-3 w-3 mr-1" />
                           Sabitlenmiş
                         </h3>
                        <div className="space-y-3">
                          {pinnedNotes.map(note => (
                            <NoteCard
                              key={note.id}
                              note={note}
                              isSelected={selectedNote?.id === note.id}
                              onSelect={() => setSelectedNote(note)}
                              onPin={() => handlePinNote(note.id)}
                              onArchive={() => handleArchiveNote(note.id)}
                              onDelete={() => handleDeleteNote(note.id)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                                             {pinnedNotes.length > 0 && (
                         <h3 className={`text-xs font-semibold ${currentTheme.colors.textSecondary} uppercase tracking-wide mb-3`}>
                           Diğer Notlar
                         </h3>
                       )}
                      <div className="space-y-3">
                        {unpinnedNotes.map(note => (
                          <NoteCard
                            key={note.id}
                            note={note}
                            isSelected={selectedNote?.id === note.id}
                            onSelect={() => setSelectedNote(note)}
                            onPin={() => handlePinNote(note.id)}
                            onArchive={() => handleArchiveNote(note.id)}
                            onDelete={() => handleDeleteNote(note.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "archived" && (
                                     <div>
                     <h3 className={`text-xs font-semibold ${currentTheme.colors.textSecondary} uppercase tracking-wide mb-3`}>
                       Arşivlenmiş Notlar
                     </h3>
                    <div className="space-y-3">
                      {archivedNotes.map(note => (
                        <NoteCard
                          key={note.id}
                          note={note}
                          isSelected={selectedNote?.id === note.id}
                          onSelect={() => setSelectedNote(note)}
                          onPin={() => handlePinNote(note.id)}
                          onArchive={() => handleArchiveNote(note.id)}
                          onDelete={() => handleDeleteNote(note.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Note Editor */}
          <div className={`flex-1 ${currentTheme.colors.surface.replace('backdrop-blur-xl', 'backdrop-blur-sm').replace('bg-white/80', 'bg-white/30').replace('bg-gray-800/80', 'bg-gray-800/30')}`}>
            {selectedNote ? (
              <div className="h-full flex flex-col">
                <div className={`p-6 border-b ${currentTheme.colors.border} ${currentTheme.colors.surface.replace('backdrop-blur-xl', 'backdrop-blur-sm').replace('bg-white/80', 'bg-white/50').replace('bg-gray-800/80', 'bg-gray-800/50')}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {isEditing ? (
                        <Input
                          value={selectedNote.title}
                          onChange={(e) => setSelectedNote({
                            ...selectedNote,
                            title: e.target.value
                          })}
                          className="text-xl font-semibold bg-transparent border-none p-0 focus:ring-0"
                        />
                      ) : (
                        <h2 className={`text-xl font-semibold ${currentTheme.colors.text}`}>{selectedNote.title}</h2>
                      )}
                      {selectedNote.isPinned && (
                        <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                          <Pin className="h-3 w-3" />
                          <span>Sabitli</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="hover:bg-gray-100"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePinNote(selectedNote.id)}
                        className={cn("hover:bg-gray-100", selectedNote.isPinned && "text-yellow-600")}
                      >
                        <Pin className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleArchiveNote(selectedNote.id)}
                        className="hover:bg-gray-100"
                      >
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteNote(selectedNote.id)}
                        className="hover:bg-red-50 text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  {isEditing ? (
                    <div className="h-full flex flex-col">
                      <Textarea
                        value={selectedNote.content}
                        onChange={(e) => setSelectedNote({
                          ...selectedNote,
                          content: e.target.value
                        })}
                        placeholder="Notunuzu buraya yazın..."
                        className="flex-1 resize-none bg-transparent border-none p-0 text-lg leading-relaxed focus:ring-0"
                      />
                      <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200/50">
                        <Button
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                          className={`${currentTheme.colors.button.secondary}`}
                        >
                          İptal
                        </Button>
                        <Button
                          onClick={() => {
                            handleSaveNote(selectedNote.id, selectedNote.title, selectedNote.content);
                            setIsEditing(false);
                          }}
                          className={`bg-gradient-to-r ${currentTheme.colors.button.primary} text-white`}
                        >
                          Kaydet
                        </Button>
                      </div>
                    </div>
                  ) : (
                                         <div className="h-full">
                       <div 
                         className={`whitespace-pre-wrap ${currentTheme.colors.textSecondary} text-lg leading-relaxed p-6 rounded-xl`}
                         style={{ backgroundColor: selectedNote.color }}
                       >
                         {selectedNote.content || "Not içeriği boş..."}
                       </div>
                     </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={`h-full flex items-center justify-center ${currentTheme.colors.textSecondary}`}>
                <div className="text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${currentTheme.colors.gradient.from.replace('from-', 'from-').replace('600', '100')} ${currentTheme.colors.gradient.to.replace('to-', 'to-').replace('600', '100')} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Notebook className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Not Seçin</h3>
                  <p className={currentTheme.colors.textSecondary}>Not seçin veya yeni bir not oluşturun</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

interface NoteCardProps {
  note: Note;
  isSelected: boolean;
  onSelect: () => void;
  onPin: () => void;
  onArchive: () => void;
  onDelete: () => void;
}

function NoteCard({ note, isSelected, onSelect, onPin, onArchive, onDelete }: NoteCardProps) {
  const { currentTheme } = useTheme();
  
  return (
    <div
      className={cn(
        "group cursor-pointer transition-all duration-300 rounded-xl border-2",
        isSelected 
          ? `border-${currentTheme.colors.primary.replace('#', '')} bg-${currentTheme.colors.primary.replace('#', '')}/10 shadow-lg` 
          : `border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:bg-white/50 dark:hover:bg-gray-700/50`,
        note.isArchived && "opacity-60"
      )}
      onClick={onSelect}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className={`font-semibold ${currentTheme.colors.text} truncate`}>{note.title}</h4>
              {note.isPinned && <Pin className="h-3 w-3 text-yellow-500 flex-shrink-0" />}
            </div>
            <p className={`text-sm ${currentTheme.colors.textSecondary} line-clamp-2`}>
              {note.content}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPin();
              }}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <Pin className="h-3 w-3" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onArchive();
              }}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <Archive className="h-3 w-3" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
          
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: note.color }}
          />
        </div>
      </div>
    </div>
  );
} 