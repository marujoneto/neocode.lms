import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-8">Welcome back to the AI course</h1>

      {/* Course Progress */}
      <Card className="mb-8 bg-white bg-opacity-10 text-white">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold">17/17</h3>
              <p className="text-sm">Attendance</p>
              <p className="text-xs opacity-70">Don't miss the next class!</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">16/19</h3>
              <p className="text-sm">Homework</p>
              <p className="text-xs opacity-70">Don't forget to hand in the assignments!</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">93/100</h3>
              <p className="text-sm">Rating</p>
              <p className="text-xs opacity-70">Great! Keep it up!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Schedule */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My schedule</h2>
          <Card className="mb-4 bg-white bg-opacity-10 text-white">
            <CardContent className="p-0">
              <Calendar mode="single" className="rounded-md border-0" />
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 text-white">
            <CardHeader>
              <CardTitle>Today's classes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="bg-indigo-600 bg-opacity-50 p-2 rounded">
                  <span className="font-bold">1.</span> Business English (12:00-13:00)
                </li>
                <li className="bg-indigo-600 bg-opacity-50 p-2 rounded">
                  <span className="font-bold">2.</span> Programming (15:00-16:00)
                </li>
                <li className="bg-indigo-600 bg-opacity-50 p-2 rounded">
                  <span className="font-bold">3.</span> AI technologies (19:00-20:00)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Other Functions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Other functions</h2>
          
          {/* Reminders */}
          <Card className="mb-8 bg-white bg-opacity-10 text-white">
            <CardHeader>
              <CardTitle>My reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Complete and submit the project</li>
                <li>Email my mentor</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tutors */}
          <Card className="mb-8 bg-white bg-opacity-10 text-white">
            <CardHeader>
              <CardTitle>My tutors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Mr. Smith</div>
                    <div className="text-sm opacity-70">Main professor</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Sarah Jones</div>
                    <div className="text-sm opacity-70">Computer workshop mentor</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Mr. Grey</div>
                    <div className="text-sm opacity-70">Robotics tutor</div>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Ms. Kim</div>
                    <div className="text-sm opacity-70">Personal mentor</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white bg-opacity-10 text-white">
            <CardHeader>
              <CardTitle>Upcoming events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-indigo-600 bg-opacity-50 p-4 rounded-md">
                  <div className="font-semibold">Mandatory</div>
                  <div>Computer workshop</div>
                  <div className="text-sm opacity-70">May 22, 17:00-19:00</div>
                </div>
                <div className="bg-green-600 bg-opacity-50 p-4 rounded-md">
                  <div className="font-semibold">Optional</div>
                  <div>UX design lecture</div>
                  <div className="text-sm opacity-70">May 28, 13:00-14:30</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}