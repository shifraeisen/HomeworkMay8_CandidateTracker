using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeworkMay8_CandidateTracker.Data
{
    public enum Status
    {
        Pending,
        Confirmed,
        Declined
    }
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone {  get; set; }
        public string Email {  get; set; }
        public string Notes { get; set; }
        public Status Status { get; set; }
    }
}
