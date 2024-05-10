using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeworkMay8_CandidateTracker.Data
{
    public class CandidateRepository
    {
        private readonly string _connectionString;

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddCandidate(Candidate c)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public List<int> GetCounts()
        {
            List<int> counts = new List<int>();
            using var context = new CandidateDataContext(_connectionString);
            counts.Add(context.Candidates.Where(c => c.Status == Status.Pending).Count());
            counts.Add(context.Candidates.Where(c => c.Status == Status.Confirmed).Count());
            counts.Add(context.Candidates.Where(c => c.Status == Status.Declined).Count());
            return counts;
        }
        public List<Candidate> GetAllByStatus(Status s)
        {
            using var context = new CandidateDataContext(_connectionString);
            var list = context.Candidates.Where(c => c.Status == s).ToList();
            return context.Candidates.Where(c => c.Status == s).ToList();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void Decision(char d, int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.First(c => c.Id == id).Status = d == 'c' ? Status.Confirmed : Status.Declined;
            context.SaveChanges();
        }
    }
}
